import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  /* overflow-x: hidden; */
}
body{
    width: 100vw;
    min-height: 100vh;
  }
  
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  body, input, button, textarea, label {
    font-family: 'Inter';
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }
 
#root{
	display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
	background-color: var(--color-brand-brand-4);
	overflow-x: hidden;
}
  
:root {
	--color-feedback-alert-1: #cd2b31;
	--color-feedback-alert-2: #fdd8d8;
	--color-feedback-alert-3: #ffe5e5;
	--color-feedback-sucess-1: #18794e;
	--color-feedback-sucess-2: #ccebd7;
	--color-feedback-sucess-3: #ddf3e4;
	--color-random-random-1: #e34d8c;
	--color-random-random-2: #c04277;
	--color-random-random-3: #7d2a4d;
	--color-random-random-4: #7000ff;
	--color-random-random-5: #6200e3;
	--color-random-random-6: #36007d;
	--color-random-random-7: #349974;
	--color-random-random-8: #2a7d5f;
	--color-random-random-9: #153d2e;
	--color-random-random-10: #6100ff;
	--color-random-random-11: #5700e3;
	--color-random-random-12: #30007d;
	--color-brand-brand-1: #4529e6;
	--color-brand-brand-2: #5126ea;
	--color-brand-brand-3: #b0a6f0;
	--color-brand-brand-4: #edeafd;
	--color-grey-scale-grey-0: #0b0d0d;
	--color-grey-scale-grey-1: #212529;
	--color-grey-scale-grey-2: #495057;
	--color-grey-scale-grey-3: #868e96;
	--color-grey-scale-grey-4: #adb5bd;
	--color-grey-scale-grey-5: #ced4da;
	--color-grey-scale-grey-6: #dee2e6;
	--color-grey-scale-grey-7: #e9ecef;
	--color-grey-scale-grey-8: #f1f3f5;
	--color-grey-scale-grey-9: #f8f9fa;
	--color-grey-scale-grey-10: #fdfdfd;
	--color-colors-fixed-white-fixed: #ffffff;
	
	--modal-background: rgba(33, 37, 41, 0.6);

	--font-heading-1: 2.75rem; 
	--font-heading-2: 2.25rem; 
	--font-heading-3: 2rem; 
	--font-heading-4: 1.75rem; 
	--font-heading-5: 1.5rem; 
	--font-heading-6: 1.25rem; 
	--font-body-1: 1.5rem; 
	--font-body-2: 1rem; 
	--font-body-3: 1.6rem; 

	--font-bold: 700;
	--font-semibold: 600;
	--font-medium: 500;
	--font-base: 400;

	--button-border: 2px;
	--input-border: 4px;

	--button-width-0: 5rem; 
    --button-width-1: 6.25rem; 
    --button-width-2: 6.75rem; 
    --button-width-3: 7.875rem; 
    --button-width-4: 12.875rem; 
    --button-width-5: 17.438rem; 
    --button-width-6: 100%;
    --button-width-7: 48%;
    --button-width-8: 80%;
    --button-width-9: 9.375rem; 
    --button-width-10: 10.313rem;

	--button-height-1: 3rem; // 48px

    --border-button-1: 1.5px solid var(--color-grey-scale-grey-4);
	
    font-size: 60%;
}

/* font-size: 16px;
  1rem = 10px
  */
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
.text-style-heading-heading-1-700 {
	font-size: 44px;
	font-family: "Lexend";
	font-weight: 700;
	font-style: normal;
	line-height: 56px;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-2-600 {
	font-size: 36px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-3-500 {
	font-size: 32px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-3-600 {
	font-size: 32px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-4-600 {
	font-size: 28px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-4-500 {
	font-size: 28px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-5-500 {
	font-size: 24px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-5-600 {
	font-size: 24px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-6-500 {
	font-size: 20px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-6-600 {
	font-size: 20px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-7-500 {
	font-size: 16px;
	font-family: "Lexend";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-heading-heading-7-600 {
	font-size: 16px;
	font-family: "Lexend";
	font-weight: 600;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-inputs-buttons-input-label {
	font-family: "Inter";
	font-weight: 500;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-inputs-buttons-input-placeholder {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-inputs-buttons-button-big-text {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-1-400 {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-1-600 {
	font-size: 16px;
	font-family: "Inter";
	font-weight: 700;
	font-style: normal;
	line-height: 28px;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-2-400 {
	font-size: 14px;
	font-family: "Inter";
	font-weight: 400;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}
.text-style-text-body-2-500 {
	font-size: 14px;
	font-family: "Inter";
	font-weight: 500;
	font-style: normal;
	line-height: 24px;
	text-decoration: none;
	text-transform: none;
}
`;
