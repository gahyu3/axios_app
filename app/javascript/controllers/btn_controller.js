import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="btn"
export default class extends Controller {
  static targets = ['btn', 'github'];

  github() {
    const userId = this.githubTarget.textContent.trim();
      fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
          console.log(response.status); // => 200
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(userInfo => {
          // JSONパースされたオブジェクトが渡される
          console.log(userInfo); // => {...}
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
  }


  change_color() {
    const btn1 = this.btnTarget;
    if (btn1.classList.contains('btn-primary')) {
      btn1.classList.replace('btn-primary', 'btn-success');
    } else if (btn1.classList.contains('btn-success')) {
      btn1.classList.replace('btn-success', 'btn-danger');
    } else if (btn1.classList.contains('btn-danger')) {
      btn1.classList.replace('btn-danger', 'btn-primary');
    }
  }

  padding() {
    const btn1 = this.btnTarget;
    if (btn1.classList.contains('p-3')){
      btn1.classList.remove('p-3');
    } else {
      btn1.classList.add('p-3');
    }
  }

}
