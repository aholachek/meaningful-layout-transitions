import { injectGlobal } from 'styled-components'

injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&family=Source+Code+Pro:400');

html, body {
  font-size: 21px;
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

h1,h2,h3,h4,h5 {
  color: var(--primary) !important;
}

:root {
  --white: #fff;
  --grey: #f1f4f8b0;
  --dark-grey: #6b7c93;
  --green: #24b47e;
  --teal: #4F96CE;
  --blue: #6772e5;
  --dark-blue: #4F3EF5;
  --spacer: 28px;

  --primary: #C5A5C5;
  --background:#272C34;
  --text: #dde5ef;
}

.staggered-list-content {
  width: 500px;
  margin: 2rem auto;
}
.list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  margin-top: 7rem;
}
.list li {
  width: 100%;
}
.list li:before {
  display: none !Important;
}

.list li + li {
  margin-top: 1rem;
}
.listItem {
  width: 100%;
  cursor: pointer;
  background-color: #ffd379;
  overflow: hidden;
}
.listItemContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
}
.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  background-color: #282c34;
  margin-right: 2rem;
}
.avatarExpanded {
  width: 8rem;
  height: 8rem;
  margin-right: 0;
  margin-bottom: 1rem;
}
.description > div {
  background-color: #282c34;
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
  background-color: #ffd379;
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
  background-color: #282c34;
  height: 3rem;
}

/* content fade in animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}

.animated-in .additional-content > div {
  animation: fadeIn 0.4s forwards;
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
`
