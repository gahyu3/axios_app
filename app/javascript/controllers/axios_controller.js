import { Controller } from "@hotwired/stimulus";
import axios from "axios";


// Connects to data-controller="axios"
export default class extends Controller {
  static targets = ["image", "answer"]

  connect() {
    console.log("aaa")
    axios.get('https://yesno.wtf/api')
    .then(response => {
      console.log(response.data)
      const data = response.data
      console.log(data.image) ;
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

  yes_or_no() {
    axios.get('https://yesno.wtf/api')
    .then(response => {
      console.log(response.data)
      const answer = response.data.answer
      const imageUrl = response.data.image;

      this.answerTarget.textContent = answer
      this.imageTarget.src = imageUrl;
    })
    .catch(error => {
      console.error("Error:", error);
    });


  }

}
