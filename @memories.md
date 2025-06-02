[v1.0.0] Development: Figma MCP 및 사용자 요구사항을 기반으로 Input 컴포넌트 구현 계획 수립. variant(기본, 포커스, 에러, 비활성, 아이콘 포함), text 타입, validation/feedback, 접근성(ARIA, 라벨, 에러 메시지, 키보드, 스크린리더), 단일 사이즈, 인라인 피드백, 다국어/다크모드/폼연동/애니메이션 미지원 등 세부 요구사항 확정. @scratchpad.md에 단계별 Task, Dependencies, Progress Notes 체계적으로 작성. src/components/mode.md 아키텍처 가이드(폴더 구조, 타입, 스타일, 스토리북, 네이밍, 컴포지션) 엄격 준수 계획. 다음 단계: TypeScript interface 및 props 설계, 폴더/파일 구조 생성, 스타일링, 접근성, Storybook, 테스트 및 문서화 순으로 진행 예정. #feature #input #plan #figma #accessibility #validation [2024-06-13T00:00]

[v0.1.1] Development: 사용자의 요청에 따라 `makeStory.mdc` 파일을 새로 생성하고, 이전에 정의했던 Storybook 스토리 작성 규칙을 해당 파일에 마크다운 형식으로 저장함. #storybook #documentation #rules #file_creation

[v0.1.3] Development: 사용자의 요청에 따라 Accordion 컴포넌트의 Basic 스토리가 여러 아이템을 표시하도록 수정하고, @make-story.mdc 파일의 Basic 스토리 작성 규칙에도 해당 내용을 반영하여 업데이트함. #storybook #rules #accordion #documentation

[v0.1.4] Development: 사용자의 요청에 따라 Storybook 스토리 작성 규칙 파일의 위치를 `@make-story.mdc`에서 `rules/make-story.mdc`로 변경하고, 최종 규칙 내용을 해당 파일에 업데이트함. 루트의 중복 파일 삭제는 거부됨. #rules #documentation #storybook #file_management

[v0.1.5] Development: 사용자의 요청에 따라 Accordion 스토리의 Basic 예시가 BottomSheet처럼 합성 컴포넌트의 전체 사용 구조를 보여주는 소스 코드를 Docs 탭에 표시하도록 수정함. #storybook #accordion #documentation #sourcecode

[v0.1.6] Development: 사용자의 요청에 따라, 합성 컴포넌트의 Basic 스토리는 Docs 탭에 전체 사용 구조를 보여주는 소스 코드 예시를 제공해야 한다는 규칙을 rules/make-story.mdc 파일에 추가함. #rules #storybook #documentation #compoundcomponents

[v0.1.7] Discussion: 사용자의 AlertDialog 사용 방식(합성 컴포넌트 직접 사용 vs. Context/Hook 사용) 고민에 대해, 각 방식의 장단점을 분석하고 합성 컴포넌트 방식(1안)이 명확성, 유연성, 제어권, React 철학 부합 등의 이유로 장기적으로 더 나은 선택일 수 있음을 설명함. 추가적으로, 반복을 줄이기 위한 절충안으로 자주 사용되는 패턴의 Wrapper 컴포넌트 생성 방안을 제시함. #discussion #architecture #react #alertdialog #compoundcomponents #contextapi

[v0.1.8] Discussion: 사용자의 요청에 따라 React의 선언적 UI가 가지는 주요 장점(예측 가능성, 가독성, 유지보수 용이성, 디버깅 용이성, 추상화)에 대해 상세히 설명하고, 명령형 UI와의 비유를 통해 이해를 도움. #react #declarativeui #uipatterns #discussion

[v0.1.9] Development: AlertDialog 스토리 생성 중 발생한 린트 오류에 대해 임시 조치함. Button 컴포넌트의 variant 타입 문제 및 AlertDialogAction의 스타일링 유연성 확보를 위한 근본적인 컴포넌트 수정이 필요함을 사용자에게 안내. #storybook #alertdialog #linting #compdev

[v0.2.0] Development: AlertDialog 스토리 파일에서 DestructiveAction, WithOnlyConfirm 스토리를 삭제하고, 외부에서 상태를 제어하는 SimpleAlertDialog 컴포넌트를 사용하는 SimpleAlert 스토리를 추가함. Storybook 컨트롤 및 문서 예시 코드 포함. #storybook #alertdialog #refactor #simplification

[v2.0.1] Development: `InputWithLabel` 스토리의 라벨 및 피드백 메시지 표시 방식을 일관되게 적용하기 위해 `rules/make-story.mdc` 파일에 "3.1. 라벨 및 피드백을 포함하는 컴포넌트 스토리" 규칙을 추가함. 해당 규칙은 `Basic` 스토리 구성, `argTypes` 설정, 문서용 소스 코드 제공, `React.useState` 사용 예시 등을 포함함.

[v2.0.2] Development: `rules/make-story.mdc` 파일의 "3.1. 라벨 및 피드백을 포함하는 컴포넌트 스토리" 규칙 수정. `Basic` 스토리는 라벨 없는 기본 컴포넌트를 표시하고, 라벨 및 피드백 포함 형태는 `WithLabel` 등으로 분리하여 작성하도록 변경.

[v2.0.3] Development: `rules/make-story.mdc` 파일 구조 변경. "3.1. 라벨 및 피드백을 포함하는 컴포넌트 스토리" 섹션의 내용을 "3. Basic 스토리 작성 규칙"으로 통합하고 3.1 섹션은 삭제함. `Basic` 스토리 정의, 파생 스토리(예: `WithLabel`) 원칙, 사용자 입력 컴포넌트의 상태 관리(`React.useState`) 및 문서화 지침을 `Basic` 스토리 규칙 내에 포함시킴.

[v2.0.4] Development: `rules/make-story.mdc` 규칙에 따라 `src/components/ui/Input/index.stories.tsx` 파일을 전체적으로 재작성함. `Input` 및 `InputWithLabel`의 각 스토리에 `React.useState`를 적용하여 인터랙티브하게 만들고, 문서 소스 코드(`parameters.docs.source.code`)를 규칙에 맞게 업데이트함. 불필요한 `inputWithLabelMeta` 변수 및 관련 타입을 삭제하고 `WithLabel` 스토리 타입을 직접 명시하여 코드 정리.

[v2.0.5] Development: `rules/make-story.mdc`의 `Basic` 스토리 규칙을 수정하여 문서에 표시될 예제 코드에서 `import`문과 `export function`을 제외하고 핵심 로직부터 시작하도록 변경. `src/components/ui/Input/index.stories.tsx` 파일의 관련 스토리들 (`Basic`, `WithIcons`, `Error`, `WithLabel`)의 `parameters.docs.source.code` 내용을 새 규칙에 맞게 업데이트함. `WithLabel` 스토리의 `render` 함수 내 `@ts-ignore` 관련 린터 문제 발생 및 해결 시도.
