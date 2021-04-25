import './App.sass';

function App() {
  return (
    pug`
      div.container.App
        div.row
          div.col-8.align-self-center
            img#profile(src="profile.jpg")
            
            hr.text-light-secondary.divider(size=1)

            div.text-light-main.names 顏廷安

            div.text-light-main.names Daniel

          div.col-4.align-self-center
            div.row.mb-2
              button.rounded.btn.btn-dark-main.fw-bold Contact

            div.row
              button.rounded.btn.btn-dark-secondary.fw-bold Skill
    `
  );
}

export default App;
