import { injectGlobal } from "styled-components"

injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&family=Source+Code+Pro:400');

html, body {
  font-size: 18px;

}
pre, code {
  font-family: 'Source Code Pro', monaco, sans-serif !important;
}
* {
  box-sizing: border-box;
}

hr {
  display: none;
}

// ugghhghghghgh
#root >div > div > div >div > div{
  justify-content: flex-start;
  position: relative;
    >div> h1 {
    margin-top: 4rem !important;
  }
}

//ugghh
h2:first-child {
  padding-top: 3rem;
}

button {
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid black;
  border-radius: 6px;
  padding: .25rem .5rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f4f8b0;

  }
}

.small-list + ol {
  li {
    padding-left: .5rem;
    margin-bottom: .5rem;
    a {
      text-decoration: none;
    }
  }
}

// god forgive me
.big-list + ol {
  margin-top: 3rem;
  li {
    font-size: 2.2rem;
    padding-left: .5rem;
    margin-bottom: 1rem;
    a {
      text-decoration: none;
    }
  }
}

:root {
  --white: #fff;
  --grey: #f1f4f8;
  --dark-grey: #6b7c93;
  --green: #24b47e;
  --teal: #4F96CE;
  --dark-blue: #4F3EF5;
  --spacer: 28px;

  --primary: #272C34;
  --background:#fff;
  --text: #dde5ef;

  --pink:#EC3F7A;
  --warm-purple:#AB47BC;
  --purple:#7E57C2;
  --blue:#5D6CC0;

}

a {
  color: var(--blue);
  &:visited {
    color: var(--blue);
  }
  &:hover {
    text-decoration: underline !important
  }
}

.staggered-list-content {
  width: 500px;
  margin: 0 auto;
}
.list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  margin-top: 1rem;
}
.list li {
  width: 100%;
}
.list li:before {
  display: none important!;
}

.list li + li {
  margin-top: 1rem;
}
.listItem {
  width: 100%;
  cursor: pointer;
  overflow: hidden;
}

.listItemContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
}
.avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100px;
  background-color: #fff;
  margin-right: 2rem;
}
.avatarExpanded {
  width: 7rem;
  height: 7rem;
  margin-right: 0;
  margin-bottom: 1rem;
}
.description > div {
  background-color: #fff;
  width: 14rem;
  border-radius: 6px;
  height: 0.5rem;
}
.description > div:nth-of-type(2) {
  width: 11rem;
}
.description > div:nth-of-type(3) {
  width: 8rem;
}
.description > div + div {
  margin-top: 1rem;
}
.expandedListItem .description {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.expandedListItem {
  cursor: pointer;
}

.expandedListItemContent {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.additional-content {
  width: 100%;
  margin-top: 2rem;
}

.additional-content > div {
  opacity: 0;
  border-radius: 3px;
  background-color: #fff;
  height: 3rem;
}

/* content fade in animations */
@keyframes fadeInUpSmall {
  0%   { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0) }
}

 .fadeInUpSmall {
  animation: fadeInUpSmall .35s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

.animated-in .additional-content > div {
  animation: fadeInUpSmall 0.4s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

.additional-content > div:nth-of-type(2) {
  animation-delay: 0.15s;
}
.additional-content > div:nth-of-type(3) {
  animation-delay: 0.3s;
}
.additional-content > div + div {
  margin-top: 1rem;
}

@keyframes fadeInUp {
  0%   { opacity: 0; transform: translateY(100px); }
  100% { opacity: 1; transform: translateY(0) }
}

 .fadeInUp{
  animation: fadeInUp .35s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

@keyframes fadeOutDown {
  100% { opacity: 0; transform: translateY(100px) }
}

 .fadeOutDown{
  animation: fadeOutDown .3s forwards;
  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
}

@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

 .fadeIn{
  animation: fadeIn .35s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

@keyframes fadeOut {
  0% { opacity: 1}
  100% { opacity: 0; }
}

 .fadeOut{
  animation: fadeOut .3s forwards;
  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);

}

@keyframes fadeInLeft {
  0%   { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0)}
}

.fadeInLeft {
  animation: fadeInLeft .35s forwards;
  animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

/*

@keyframes fadeOutRight {
  100% { opacity: 0;  transform: translateX(50px);}
}


.fadeOutRight {
  animation: fadeOutRight .3s forwards;
} */
`
