import './App.sass';

function App() {
  return (
    pug`
      div.container.App
        div.row
          div.col-8.align-self-center
            img#profile(src="profile.jpg")
            
            hr.text-light-main

            span 顏廷安

            br

            span Daniel

          div.col-4.align-self-center
            div.row.mb-2
              button.rounded.btn.btn-dark-main Contact

            div.row
              button.rounded.btn.btn-dark-secondary Skill
    `
  );
}

export default App;
