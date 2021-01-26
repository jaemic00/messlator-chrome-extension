import { setCORS } from "google-translate-api-browser";

//this can be used to set a cors proxy
const translate = setCORS("");

const translate_message = (e) =>{
  translate(e.target.innerText, { to: "es" })
          .then(res => {
            e.target.innerText = res.text;
          })
          .catch(err => {
            console.error(err);
          });
}

(function() {
	let blobs = document.querySelectorAll('[dir="auto"]');
    blobs.forEach((blob)=>{
        if(blob.tagName == "DIV"){
            blob.onclick = translate_message;
        }
    });
})();
