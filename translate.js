var language_select = document.querySelector("#language_select");
                language_select.addEventListener("change", e=> toggle(e), false);

            function toggle(e){
                console.log(e.target);//the select is the target of this 'change' event
                setLanguage(e.target.value)
            }

            //sessionStorage. replace with localStorage for permanent storage/retrieval
            function setLanguage(lang){
                // debugger;
                var lang = lang || localStorage.getItem("lang");//use lang param if passed, else try sessionStorage
                    lang = lang || "english"; //use lang if one was found, else default to english
                document.body.classList.remove("english");//if english there, remove it
                document.body.classList.remove("spanish");//if spanish there, remove it
                document.body.classList.add(lang); // now set it on body
                localStorage.setItem("lang", lang); // finally update localStorage
                language_select.value=lang;//now update <select> to keep it in sync
            }
