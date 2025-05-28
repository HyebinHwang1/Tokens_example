import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ES Modules에서는 __dirname이 기본적으로 제공되지 않으므로, 다음과 같이 구합니다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 경로 설정 (프로젝트 구조에 맞게 조정 필요)
const projectRoot = path.resolve(__dirname); // 스크립트가 프로젝트 루트에 있다고 가정
const iconsJsonPath = path.join(projectRoot, ".icona/icons.json");
const outputDir = path.join(projectRoot, "src/components/icons");

function kebabToPascalCase(str) {
  return str
    .replace(/^[-.]+/, "") // 문자열 시작 부분의 하이픈이나 점 제거
    .replace(/[-.]+(\w)/g, (match, char) => char.toUpperCase()) // 하이픈 또는 점 뒤의 문자를 대문자로
    .replace(/^\w/, (char) => char.toUpperCase()); // 첫 글자를 대문자로
}

// SVG 콘텐츠에서 속성을 JSX 호환 형태로 변환하는 함수
function processSvgContent(svgContent) {
  let processed = svgContent;

  // 1. path, g 등 내부 요소의 fill="<특정색상>"을 fill="currentColor"로 변경
  //    (단, fill="none"이나 fill="transparent" 등은 유지하도록 시도)
  //    SVG 태그 자체의 fill은 props로 관리되므로 여기서는 변경하지 않습니다.
  processed = processed.replace(
    /<(?!svg)([a-zA-Z0-9:]+)([^>]*)fill="(?!(none|currentColor|transparent|white|black)\b)[^"]*"/gi,
    (match, tagName, attrs) => {
      return `<${tagName}${attrs}fill="currentColor"`;
    }
  );
  processed = processed.replace(
    /<(?!svg)([a-zA-Z0-9:]+)([^>]*)fill="(black|#000|#000000)"/gi,
    (match, tagName, attrs) => {
      return `<${tagName}${attrs}fill="currentColor"`;
    }
  );

  // 2. kebab-case 속성을 camelCase로 변환 (예: fill-rule -> fillRule, clip-rule -> clipRule)
  processed = processed.replace(
    /([a-zA-Z0-9]+)-([a-zA-Z0-9]+)=/g,
    (match, p1, p2) => {
      return `${p1}${p2.charAt(0).toUpperCase() + p2.slice(1)}=`;
    }
  );

  // stroke-linecap, stroke-linejoin 등도 처리
  processed = processed.replace(
    /stroke-(linecap|linejoin|width|dasharray|dashoffset|miterlimit|opacity)=/g,
    (match, attrName) => {
      return `stroke${attrName.charAt(0).toUpperCase() + attrName.slice(1)}=`;
    }
  );

  return processed;
}

try {
  // 출력 디렉토리 생성 (없는 경우)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  const iconsFileContent = fs.readFileSync(iconsJsonPath, "utf-8");
  const iconsData = JSON.parse(iconsFileContent);
  const allComponentNames = [];

  console.log(
    `Found ${Object.keys(iconsData).length} icons in ${iconsJsonPath}`
  );

  for (const iconKey in iconsData) {
    if (Object.hasOwnProperty.call(iconsData, iconKey)) {
      const iconEntry = iconsData[iconKey];
      const iconName = iconEntry.name; // JSON 파일의 'name' 필드 사용
      const svgFullString = iconEntry.svg;

      if (!iconName || !svgFullString) {
        console.warn(
          `[Skipping] Invalid entry for key: ${iconKey}. Missing name or svg string.`
        );
        continue;
      }

      const componentName = kebabToPascalCase(iconName);
      allComponentNames.push(componentName);

      // viewBox 추출
      const viewBoxMatch = svgFullString.match(/viewBox="([^"]*)"/);
      if (!viewBoxMatch) {
        console.warn(`[${iconName}] viewBox not found. Skipping.`);
        continue;
      }
      const viewBoxValue = viewBoxMatch[1];

      // width 및 height 추출 (선택적)
      const widthMatch = svgFullString.match(/width="([^"]*)"/);
      const heightMatch = svgFullString.match(/height="([^"]*)"/);
      const originalWidth = widthMatch ? widthMatch[1] : null;
      const originalHeight = heightMatch ? heightMatch[1] : null;

      // <svg> 태그 내부 콘텐츠 추출
      const svgInnerContentMatch = svgFullString.match(
        /<svg[^>]*>([\s\S]*)<\/svg>/i
      );
      if (!svgInnerContentMatch) {
        console.warn(`[${iconName}] Could not parse SVG content. Skipping.`);
        continue;
      }
      let innerSvg = svgInnerContentMatch[1].trim();

      // 내부 SVG 콘텐츠 처리 (속성 변환 등)
      innerSvg = processSvgContent(innerSvg);

      // width, height props 문자열 생성
      let svgPropsString = "";
      if (originalWidth) {
        svgPropsString += `width="${originalWidth}"\n    `;
      }
      if (originalHeight) {
        svgPropsString += `height="${originalHeight}"\n    `;
      }

      const componentCode = `import * as React from "react";
import type { SVGProps } from "react";

const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="${viewBoxValue}"
    fill="currentColor" // 기본값, props로 덮어쓰기 가능
    ${svgPropsString}{...props}
  >
    ${innerSvg}
  </svg>
);

export default ${componentName};
`;
      const componentPath = path.join(outputDir, `${componentName}.tsx`);
      fs.writeFileSync(componentPath, componentCode);
      console.log(`Generated ${componentName}.tsx`);
    }
  }

  // src/components/icons/index.ts 파일 생성
  if (allComponentNames.length > 0) {
    const indexFileContent =
      allComponentNames
        .map((name) => `export { default as ${name} } from './${name}';`)
        .join("\n") + "\n";
    const indexPath = path.join(outputDir, "index.ts");
    fs.writeFileSync(indexPath, indexFileContent);
    console.log(`Generated index.ts in ${outputDir}`);
  }

  console.log("Icon component generation finished successfully.");
} catch (error) {
  console.error("Error generating icon components:", error);
  process.exit(1); // 오류 발생 시 비정상 종료
}
