"use strict";
var _a;
//                          Image code
let imageURL = null;
const imageInput = document.getElementById('imageInput');
const profile_img = document.getElementById('profile_img');
imageInput.addEventListener('change', (event) => {
    const target = event.target;
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
function limitWords(textarea, maxWords) {
    let words = textarea.value.trim().split(/\s+/);
    if (words.length > maxWords) {
        textarea.value = words.slice(0, maxWords).join(" ");
        alert("Max type words reached");
    }
}
// Attach the 'input' event to the textarea for dynamic updates
const textarea = document.getElementById('myTextArea');
if (textarea) {
    textarea.addEventListener('input', () => limitWords(textarea, 50));
}
(_a = document.getElementById("resume_form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    event.preventDefault();
    // Gather personal information
    const fname = (_a = document.getElementById("fname")) === null || _a === void 0 ? void 0 : _a.value.trim();
    const lname = (_b = document.getElementById("lname")) === null || _b === void 0 ? void 0 : _b.value.trim();
    const email = (_c = document.getElementById("email")) === null || _c === void 0 ? void 0 : _c.value.trim();
    const address = (_d = document.getElementById("address")) === null || _d === void 0 ? void 0 : _d.value.trim();
    const phoneNumber = (_e = document.getElementById("phone-number")) === null || _e === void 0 ? void 0 : _e.value.trim();
    const uniField = (_f = document.getElementById("uni-field")) === null || _f === void 0 ? void 0 : _f.value.trim();
    // Gather education details
    const college = (_g = document.getElementById("college")) === null || _g === void 0 ? void 0 : _g.value.trim();
    const startYear = (_h = document.getElementById("start-year")) === null || _h === void 0 ? void 0 : _h.value.trim();
    const endYear = (_j = document.getElementById("end-year")) === null || _j === void 0 ? void 0 : _j.value.trim();
    const field = (_k = document.getElementById("college-field")) === null || _k === void 0 ? void 0 : _k.value.trim();
    const university = (_l = document.getElementById("university")) === null || _l === void 0 ? void 0 : _l.value.trim();
    const uniStartYear = (_m = document.getElementById("start-year-uni")) === null || _m === void 0 ? void 0 : _m.value.trim();
    const uniEndYear = (_o = document.getElementById("end-year-uni")) === null || _o === void 0 ? void 0 : _o.value.trim();
    const summary = (_p = document.getElementById("summary")) === null || _p === void 0 ? void 0 : _p.value.trim();
    // project
    const project_name_1 = (_q = document.getElementById("project_name_1")) === null || _q === void 0 ? void 0 : _q.value.trim();
    const project_tool_1 = (_r = document.getElementById("project_tool_1")) === null || _r === void 0 ? void 0 : _r.value.trim();
    const project_detail_1 = (_s = document.getElementById("project_detail_1")) === null || _s === void 0 ? void 0 : _s.value.trim();
    const project_name_2 = (_t = document.getElementById("project_name_2")) === null || _t === void 0 ? void 0 : _t.value.trim();
    const project_tool_2 = (_u = document.getElementById("project_tool_2")) === null || _u === void 0 ? void 0 : _u.value.trim();
    const project_detail_2 = (_v = document.getElementById("project_detail_2")) === null || _v === void 0 ? void 0 : _v.value.trim();
    // experience 
    const exp_comp_name = (_w = document.getElementById("exp_comp_name")) === null || _w === void 0 ? void 0 : _w.value.trim();
    const exp_comp_date = (_x = document.getElementById("exp_comp_date")) === null || _x === void 0 ? void 0 : _x.value.trim();
    const exp_comp_roll = (_y = document.getElementById("exp_comp_roll")) === null || _y === void 0 ? void 0 : _y.value.trim();
    // Debugging logs to check if data is being captured correctly
    console.log({ fname, lname, email, address, phoneNumber, college, startYear, endYear, field, university, uniStartYear, uniEndYear, uniField, imageURL });
    console.log(SkillArray); // Check if skills are correctly added
    if (fname && lname && email && address && phoneNumber && college && startYear && endYear && field &&
        university && uniStartYear && uniEndYear && uniField && imageURL && summary && project_name_1 && project_tool_1 && project_detail_1
        && exp_comp_name && exp_comp_roll) {
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
        }
        else {
            console.error("Error: Unable to display resume.");
        }
    }
    else {
        alert("Please fill out all fields.");
    }
    window.scrollTo({
        top: 100, // Scroll to the top of the page
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
    });
});
const SkillArray = [];
function delete_skill(index) {
    SkillArray.splice(index, 1); // Remove the skill at the specified index
    displaySkills(); // Refresh the displayed list
}
function add_skill() {
    const skillInput = document.getElementById("skills");
    const skillInputVal = skillInput.value;
    if (skillInputVal.trim() !== '') {
        SkillArray.push(skillInputVal); // Add the value to the array
        displaySkills(); // Display updated skill list
        // Clear the input field
        skillInput.value = "";
    }
    else {
        alert("Please enter a valid skill.");
    }
}
function displaySkills() {
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
function pdfResume() {
    const resumeElement = document.getElementById('resume_section');
    if (!resumeElement) {
        alert("No resume found to download.");
        return;
    }
    const profileImg = document.getElementById('profile_img');
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
    }
    else {
        // Wait until the image is fully loaded
        profileImg.onload = generatePDF;
    }
}
function editResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
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
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
    });
    document.getElementById("fname").value = (_a = document.getElementById("fname")) === null || _a === void 0 ? void 0 : _a.value.trim();
    document.getElementById("lname").value = (_b = document.getElementById("lname")) === null || _b === void 0 ? void 0 : _b.value.trim();
    document.getElementById("email").value = (_c = document.getElementById("email")) === null || _c === void 0 ? void 0 : _c.value.trim();
    document.getElementById("address").value = (_d = document.getElementById("address")) === null || _d === void 0 ? void 0 : _d.value.trim();
    document.getElementById("phone-number").value = (_e = document.getElementById("phone-number")) === null || _e === void 0 ? void 0 : _e.value.trim();
    document.getElementById("college").value = (_f = document.getElementById("college")) === null || _f === void 0 ? void 0 : _f.value.trim();
    document.getElementById("start-year").value = (_g = document.getElementById("start-year")) === null || _g === void 0 ? void 0 : _g.value.trim();
    document.getElementById("end-year").value = (_h = document.getElementById("end-year")) === null || _h === void 0 ? void 0 : _h.value.trim();
    document.getElementById("college-field").value = (_j = document.getElementById("college-field")) === null || _j === void 0 ? void 0 : _j.value.trim();
    document.getElementById("university").value = (_k = document.getElementById("university")) === null || _k === void 0 ? void 0 : _k.value.trim();
    document.getElementById("start-year-uni").value = (_l = document.getElementById("start-year-uni")) === null || _l === void 0 ? void 0 : _l.value.trim();
    document.getElementById("end-year-uni").value = (_m = document.getElementById("end-year-uni")) === null || _m === void 0 ? void 0 : _m.value.trim();
    document.getElementById("uni-field").value = (_o = document.getElementById("uni-field")) === null || _o === void 0 ? void 0 : _o.value.trim();
    document.getElementById("summary").value = (_p = document.getElementById("summary")) === null || _p === void 0 ? void 0 : _p.value.trim();
    profile_img.src = imageURL ? imageURL : '';
}
