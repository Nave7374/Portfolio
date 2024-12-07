
document.addEventListener("DOMContentLoaded", () => {
    var urlParams = new URLSearchParams(window.location.search);
    var projectKey = urlParams.get('project');
    
    var tms = {
        name: 'Transport Management System',
        category : 'Web Design',
        content:'A Mini Project about Transport Management System designed to streamline logistics, track vehicles, and optimize route planning for efficient transportation operations. Implemented a modular architecture to allow future features like automated scheduling. Handling real-time GPS data updates was challenging, so we optimized it using WebSockets for seamless live tracking. Responsive design for both desktop and mobile platforms. Intuitive dashboard for admin and drivers.',
        img1:'./assets/images/tmsbase.jpg',
        img2:'./assets/images/tms 2.jpg',
        img3:'./assets/images/tms3.jpg'
    };

    var nm={
        name: 'Reducing the Environmental Footprint of Food',
        category : 'Web Design',
        content:'A Naan Mudhalvan Project about Reducing the Environmental Footprint of Food, was aimed at tackling the pressing issue of food waste and greenhouse gas emissions in the food supply chain. By implementing a robust platform for redistributing surplus food, optimizing food production workflows, and employing smart technologies for waste tracking, we reduced food waste by 30% in the first six months and cut CO2 emissions by 15%.',
        img1:'./assets/images/nmbase.jpg',
        img2:'./assets/images/nm2.jpg',
        img3:'./assets/images/nm3.jpg'
    };

    var md={
        name: 'Malicious mining Code detection Using Machine Learning Algorithms',
        category : 'Software Design',
        content:'A Final Year Project about Malicious mining Code detection Using Machine Learning Algorithms, which was to develop a robust malware detection system in Java to identify and classify potentially malicious software. The project leveraged the power of machine learning to analyze and detect malware based on features extracted from data files and system logs.The final model demonstrated a high detection accuracy, showcasing the potential of machine learning to enhance cybersecurity measures.',
        img1:'./assets/images/malware bas.jpg',
        img2:'./assets/images/malware 2.jpg',
        img3:'./assets/images/malware 3.jpg'
    }

    var displayitems=document.getElementById('project-details');

    var arr=[tms,nm,md];
    // // console.log(arr);

    if(!isNaN(projectKey) && projectKey >= 0 && projectKey < arr.length){
        var project=arr[projectKey];
        var items= `<div class="row">
                        <div class="col-md-7">
                            <div class="project-img">
                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="${project.img1}" class="d-block w-100 img-fluid" alt="img not found">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="${project.img2}" class="d-block w-100 img-fluid" alt="img not found">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="${project.img3}" class="d-block w-100 img-fluid" alt="img not found" >
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="content">
                                <div class="content-header">
                                    <h3>Project Information</h3>
                                </div>
                                <div class="content-body mt-4">
                                    <p><b>Project Name </b> : <span class="text-primary">${project.name} </span></p>
                                    <p><b>Category</b>: <span class="text-primary">${project.category}</span></p>
                                    <!-- <p><b></b>: <span class="text-primary"></span></p> -->
                                </div>
                                <div class="content-footer">
                                    <p>${project.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;
    }
    document.getElementById('title').textContent=project.name;
    displayitems.innerHTML=items;
});
