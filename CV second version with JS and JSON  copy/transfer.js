let url = "cv.json"

const myExperience = document.getElementById('myExperience')
const myEducation = document.getElementById('myEducation')

const loadingStatus = document.querySelectorAll('.status')


async function getCVData() {
    let response = await fetch(url);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let cvData = await response.json();
        //console.log(cvData.experience)
        //console.log(cvData.education)
        loadingStatus.innerText = ""

        /*
        cvData.experience.forEach(exp => console.log(exp))
        cvData.education.forEach(edu => console.log(edu))
        */
        const cvKeys = Object.keys(cvData);
        // console.log(cvKeys)

        cvKeys.forEach(cvKey => {
            //console.log(cvKey)
            //console.log(cvData[cvKey])

            const cvItems = cvData[cvKey];
            cvItems.forEach(cvItem => {

                if (cvItem.hasOwnProperty('position')) {
                    //console.log("Yes it is")
                    const myRenderCvItem = document.createElement('div')
                    myRenderCvItem.innerHTML = `
                    <strong>${cvItem.position}</strong>
                    <h4>${cvItem.place}</h4>
                    <h5>${cvItem.period}</h5>
                    <p>${cvItem.description}</p>
                    `;
                    console.log(myRenderCvItem)
                    myExperience.appendChild(myRenderCvItem);
                }


                if (cvItem.hasOwnProperty('line')) {
                    //console.log("Yes it is")
                    const myRenderCvItem = document.createElement('div')
                    myRenderCvItem.innerHTML = `
                    <strong>${cvItem.line}</strong>
                    <h4>${cvItem.place}</h4>
                    <h5>${cvItem.period}</h5>
                    `;
                    //console.log(myRenderCvItem)
                    myEducation.appendChild(myRenderCvItem);
                }





                console.log(cvItem)
                console.log("------------ inner loop")
            })




            //Pseudocode: Skriv ut all data från cvData som lämpligt HTML
            //1. Skriv utt data från experience
            //2. Skriv utt data från experience
            console.log("=========== uttre loop")

        });

        /* 
                myExperience.innerHTML = ``; */







        // myEducation.innerHTML = ``;
    } else {
        console.log("HTTP-Error:" + response.status);
        myExperience.innerHTML = `<li>No data found</li>`;
        myEducation.innerHTML = `<li>No data found</li>`;
    }

}
getCVData();

