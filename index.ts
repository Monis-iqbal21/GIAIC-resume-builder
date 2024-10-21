declare const html2pdf: any;



//                          Image code

let imageURL: string | null = null;
const imageInput = document.getElementById('imageInput') as HTMLInputElement;
const profile_img = document.getElementById('profile_img') as HTMLImageElement;

imageInput.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
        const file = target.files[0];

        // Create a temporary URL for the uploaded image and store it in the global variable
        imageURL = URL.createObjectURL(file);

        profile_img.src = imageURL;


        // You can now use the imageURL variable to reference the image as needed
    }
});

// A function to get the current image URL
function getImageURL() {
    return imageURL;
}


//        text area word counter


function limitWords(textarea: HTMLTextAreaElement, maxWords: number): void {
    let words: string[] = textarea.value.trim().split(/\s+/);

    if (words.length > maxWords) {
        textarea.value = words.slice(0, maxWords).join(" ");
        alert("Max type words reached")
    }


}





// Attach the 'input' event to the textarea for dynamic updates
const textarea = document.getElementById('myTextArea') as HTMLTextAreaElement;
if (textarea) {
    textarea.addEventListener('input', () => limitWords(textarea, 50));
}







document.getElementById("resume_form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather personal information
    const fname = (document.getElementById("fname") as HTMLInputElement)?.value.trim();
    const lname = (document.getElementById("lname") as HTMLInputElement)?.value.trim();
    const email = (document.getElementById("email") as HTMLInputElement)?.value.trim();
    const address = (document.getElementById("address") as HTMLInputElement)?.value.trim();
    const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement)?.value.trim();
    const uniField = (document.getElementById("uni-field") as HTMLInputElement)?.value.trim();
    // Gather education details
    const college = (document.getElementById("college") as HTMLInputElement)?.value.trim();
    const startYear = (document.getElementById("start-year") as HTMLInputElement)?.value.trim();
    const endYear = (document.getElementById("end-year") as HTMLInputElement)?.value.trim();
    const field = (document.getElementById("college-field") as HTMLInputElement)?.value.trim();

    const university = (document.getElementById("university") as HTMLInputElement)?.value.trim();
    const uniStartYear = (document.getElementById("start-year-uni") as HTMLInputElement)?.value.trim();
    const uniEndYear = (document.getElementById("end-year-uni") as HTMLInputElement)?.value.trim();
    const summary = (document.getElementById("summary") as HTMLInputElement)?.value.trim();

// project
    const project_name_1 = (document.getElementById("project_name_1") as HTMLInputElement)?.value.trim();
    const project_tool_1 = (document.getElementById("project_tool_1") as HTMLInputElement)?.value.trim();
    const project_detail_1 = (document.getElementById("project_detail_1") as HTMLInputElement)?.value.trim();

    const project_name_2 = (document.getElementById("project_name_2") as HTMLInputElement)?.value.trim();
    const project_tool_2 = (document.getElementById("project_tool_2") as HTMLInputElement)?.value.trim();
    const project_detail_2 = (document.getElementById("project_detail_2") as HTMLInputElement)?.value.trim();
    

    // experience 

    const exp_comp_name = (document.getElementById("exp_comp_name") as HTMLInputElement)?.value.trim();
    const exp_comp_date = (document.getElementById("exp_comp_date") as HTMLInputElement)?.value.trim();
    const exp_comp_roll = (document.getElementById("exp_comp_roll") as HTMLInputElement)?.value.trim();

    // Debugging logs to check if data is being captured correctly
    console.log({ fname, lname, email, address, phoneNumber, college, startYear, endYear, field, university, uniStartYear, uniEndYear, uniField, imageURL });
    console.log(SkillArray);  // Check if skills are correctly added

    

    if (fname && lname && email && address && phoneNumber && college && startYear && endYear && field &&
        university && uniStartYear && uniEndYear && uniField && imageURL && summary && project_name_1 && project_tool_1 && project_detail_1
    && exp_comp_name && exp_comp_roll
    ) {

        const resume_section = `
        <div class="section_left">


                    <div class="img_div">
                        <img src="${imageURL}" alt="Profile Image" id="profile_img" class="profile_img">
                    </div>


                    <div class="education_skill_div">


                        <h1 class="heading">Education</h1>
                        <p class="edu_detail">
                            <span class="span_heading">College: </span>
                            ${college}<br /> <span class="year_show">
                                (${uniStartYear} - ${uniEndYear})</span>
                        </p>
                        <p class="edu_detail"><span class="span_heading">Field of Study: </span> ${field}</p>

                        <br />


                        <p class="edu_detail"><span class="span_heading">University: </span>
                            ${university} <span class="year_show"><br />
                                (${startYear} - ${endYear})</span></p>
                        <p class="edu_detail"><span class="span_heading">Field of Study: </span>${uniField}</p>




                        <h1 class="heading" style="margin-top: 40px;">Skills</h1>
                        <ul class="skill_display_div">
                            ${SkillArray.map(skill => `
                                <li class="skill_display_resume">${skill}</li>
                            `)}
                                
                        </ul>


                    </div>
                </div>



                <div class="section_right">
                    <div class="personal_info_resume">


                        <h1 class="fullName">${fname} ${lname}</h1>
                        <p class="personal_info">${email} <span class="vertical_line">|</span> ${address}
                            <span class="vertical_line">|</span> ${phoneNumber}
                        </p>
                    </div>

                    <div class="summary_div">
                        <h2 class="right_headings">Summary</h2>
                        <p class="summary_detail">
                            ${summary}
                        </p>
                    </div>


                    <div class="experience_div">
                        <h2 class="right_headings">Experience</h2>
                        <p class="experience_company">${exp_comp_name}
                            <span class="vertical_line">|</span>
                            <span class="exp_date">${exp_comp_date}</span>
                        </p>
                        <p class="exp_comp_detail">${exp_comp_roll}.</p>
                    </div>

                    <div class="project_div">
                        <h2 class="right_headings">Projects</h2>
                        <p class="project_title">${project_name_1}
                        </p>
                        <p class="project_used_tools">
                            <span class="tool_heading">Tools: </span>
                            ${project_tool_1}
                        </p>
                        <p class="project_detail">${project_detail_1}.</p>



                        <p class="project_title">${project_name_2}
                        </p>
                        <p class="project_used_tools">
                            <span class="tool_heading">Tools: </span>
                            ${project_tool_2}
                        </p>
                        <p class="project_detail">${project_detail_2}.</p>
                            
                    </div>
                </div>

        `;


        



        const resume_output_show = document.getElementById("resume_section");
        if (resume_output_show) {
            resume_output_show.style.display = "grid";
            resume_output_show.innerHTML = resume_section;

            const resume_page_container = document.getElementById("resume_page_container");
            if (resume_page_container) {
                resume_page_container.style.display = "block";
            }
            const resumeFormContainer = document.getElementById("resume_form_container");
            if (resumeFormContainer) {
                resumeFormContainer.style.display = "none";
            }
            const creatResumeBtn = document.getElementById("create_resume_btn");
            if (creatResumeBtn) {
                creatResumeBtn.style.display = "none";
            }
            const editBtn = document.getElementById("edit_btn");
            if (editBtn) {
                editBtn.style.display = "inline-block";
            }
            const downloadBtn = document.getElementById("download_btn");
            if (downloadBtn) {
                downloadBtn.style.display = "inline-block";
            }
        } else {
            console.error("Error: Unable to display resume.");
        }
    } else {
        alert("Please fill out all fields.");
    }
    window.scrollTo({
        top: 100,      // Scroll to the top of the page
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
    });
});



const SkillArray: string[] = [];

function delete_skill(index: number): void {
    SkillArray.splice(index, 1); // Remove the skill at the specified index
    displaySkills(); // Refresh the displayed list
}

function add_skill(): void {
    const skillInput = document.getElementById("skills") as HTMLInputElement;
    const skillInputVal: string = skillInput.value;

    if (skillInputVal.trim() !== '') {
        SkillArray.push(skillInputVal); // Add the value to the array
        displaySkills(); // Display updated skill list

        // Clear the input field
        skillInput.value = "";
    } else {
        alert("Please enter a valid skill.");
    }
}

function displaySkills(): void {
    // Display the array elements as a list
    const array_display = SkillArray.map((skill, index) => `
    <div class="skill_display_form_div">
        <span class="skill_form_display">
                    ${skill}
                    <button type="button" class="delete_skill_btn" onclick="delete_skill(${index})">
                        X
                    </button>
                </span>
                </div>
    `).join(" ");

    const displayElement = document.getElementById("display_skills");
    if (displayElement) {
        displayElement.innerHTML = array_display;
    }
}



function pdfResume(): void {
    const resumeElement = document.getElementById('resume_section');

    if (!resumeElement) {
        alert("No resume found to download.");
        return;
    }

    const profileImg = document.getElementById('profile_img') as HTMLImageElement;

    // Define the function to generate the PDF
    const generatePDF = () => {
        const options = {
            margin: 0,
            filename: 'my_resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(resumeElement).set(options).save();
    };

    // Check if the image is fully loaded
    if (profileImg.complete) {
        // If the image is already loaded, generate the PDF
        generatePDF();
    } else {
        // Wait until the image is fully loaded
        profileImg.onload = generatePDF;
    }
}




function editResume() {

    const resume_page_container = document.getElementById("resume_page_container");
    if (resume_page_container) {
        resume_page_container.style.display = "none";
        const resumeFormContainer = document.getElementById("resume_form_container");
        if (resumeFormContainer) {
            resumeFormContainer.style.display = "block";
        }
        const creatResumeBtn = document.getElementById("create_resume_btn");
        if (creatResumeBtn) {
            creatResumeBtn.style.display = "flex";
        }
        const editBtn = document.getElementById("edit_btn");
        if (editBtn) {
            editBtn.style.display = "none";
        }
        const downloadBtn = document.getElementById("download_btn");
        if (downloadBtn) {
            downloadBtn.style.display = "none";
        }
    }

    window.scrollTo({
        top: 0,      // Scroll to the top of the page
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
    });

    (document.getElementById("fname") as HTMLInputElement).value = (document.getElementById("fname") as HTMLInputElement)?.value.trim();
    (document.getElementById("lname") as HTMLInputElement).value = (document.getElementById("lname") as HTMLInputElement)?.value.trim();
    (document.getElementById("email") as HTMLInputElement).value = (document.getElementById("email") as HTMLInputElement)?.value.trim();
    (document.getElementById("address") as HTMLInputElement).value = (document.getElementById("address") as HTMLInputElement)?.value.trim();
    (document.getElementById("phone-number") as HTMLInputElement).value = (document.getElementById("phone-number") as HTMLInputElement)?.value.trim();
    (document.getElementById("college") as HTMLInputElement).value = (document.getElementById("college") as HTMLInputElement)?.value.trim();
    (document.getElementById("start-year") as HTMLInputElement).value = (document.getElementById("start-year") as HTMLInputElement)?.value.trim();
    (document.getElementById("end-year") as HTMLInputElement).value = (document.getElementById("end-year") as HTMLInputElement)?.value.trim();
    (document.getElementById("college-field") as HTMLInputElement).value = (document.getElementById("college-field") as HTMLInputElement)?.value.trim();
    (document.getElementById("university") as HTMLInputElement).value = (document.getElementById("university") as HTMLInputElement)?.value.trim();
    (document.getElementById("start-year-uni") as HTMLInputElement).value = (document.getElementById("start-year-uni") as HTMLInputElement)?.value.trim();
    (document.getElementById("end-year-uni") as HTMLInputElement).value = (document.getElementById("end-year-uni") as HTMLInputElement)?.value.trim();
    (document.getElementById("uni-field") as HTMLInputElement).value = (document.getElementById("uni-field") as HTMLInputElement)?.value.trim();
    (document.getElementById("summary") as HTMLInputElement).value = (document.getElementById("summary") as HTMLInputElement)?.value.trim();

    profile_img.src = imageURL ? imageURL : '';
}