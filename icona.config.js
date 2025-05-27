import { generate } from "@icona/generator";

const config = {
  svg: {
    path: "./src/assets/icons/svg",
  },
  react: {
    path: "./src/components/icons",
    genIndexFile: true,
    svgrConfig: {
      dimensions: false,
      expandProps: "end",
      replaceAttrValues: {
        "#000": "currentColor",
        "#000000": "currentColor",
        black: "currentColor",
      },
    },
  },
  png: {
    active: true,
    path: "./src/assets/icons/png",
    genMode: "recreate",
  },
};

// 아이콘 생성 실행
generate({
  config,
  icons: "./.icona/icons.json", // 또는 아이콘 데이터 객체 직접 전달
})
  .then(() => {
    console.log("✅ 아이콘 생성 완료!");
  })
  .catch((error) => {
    console.error("❌ 아이콘 생성 실패:", error);
  });
