let person = document.getElementById('users')

fetch ('https://randomuser.me/api/?results=30')
    .then((resp)=>{
       
        return resp.json()// to converte the result to a json file.
    }).then((data)=>{
      
     
       
        let users= data.results;
        console.log(users);// to check the details of the file.
        return users.map((user)=>{

            const mydiv = document.createElement('div'); //we use the create element to an html element and its a tag element that can be created with the createElement
            const img = document.createElement('img');
            const p = document.createElement('p');

            person.appendChild(mydiv); //the appendChild is to attach an elment to a parent element or another element
            let para = mydiv.appendChild(p)
            let image = mydiv.appendChild(img)
            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let gender = user.gender;
            let city = user.location.city;
            let nationality = user.location.country;
            
           
            para.innerHTML =` 
            
            <style>
            .card {
                margin-left: 30px;
                color: #f59e34;
                box-shadow: 0px 10px 10px #7a7671;
                font-family: 'Courier New', Courier, monospace;
            }

            .card-title{
                font-weight: 700;
            }
            img{
                margin:20px;
                height: 100px;
                
            }
        .col-md-4{
            flex:left;
        }
        
            </style>
            
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4" >
                <img src="${user.picture.large}" class="rounded-circle" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${firstName}  ${lastName}</h5>
                  <p class="card-text"><strong>Email:</strong>  ${email}</p>
                  <p class="card-text"><strong>Gender:</strong>  ${gender}</p>
                  <p class="card-text"><strong>City:</strong>  ${city}</p>
                  <p class="card-text"><strong>Nationality:</strong>  ${nationality}</p>
                 
                </div>
              </div>
            </div>
          </div>`;
            
        })
    }).catch((error)=>{
       
    })