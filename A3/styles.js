// 1. Registration Page Styles
function applyRegistrationStyles() {
    const body = document.body;
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.backgroundColor = '#FEFAE0';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.margin = '0';

    const form = document.querySelector('form');
    form.style.color = '#47532e';
    form.style.backgroundColor = 'rgb(250, 255, 240)';
    form.style.padding = '20px';
    form.style.width = '350px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    form.style.textAlign = 'center';

    styleFormBlocks();
    styleFormLabels();
    styleFormInputs();
    styleFormButton();
}

// 2. Login Page Styles
function applyLoginStyles() {
    const body = document.body;
    body.style.fontFamily = "'Times New Roman', Times, serif";
    body.style.backgroundColor = '#FEFAE0';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.margin = '0';

    const form = document.querySelector('form');
    form.style.background = 'white';
    form.style.padding = '20px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
    form.style.textAlign = 'center';
    form.style.width = '300px';

    const h2 = document.querySelector('h2');
    h2.style.marginBottom = '20px';
    h2.style.color = '#47532e';

    styleLoginInputs();
    styleLoginButton();
}

// 3. Header & Navigation Styles
function setupHeaderStyles() {
    const header = document.querySelector('header.navbar');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.backgroundColor = '#47532e';
    header.style.padding = '15px 30px';
    header.style.color = 'white';
    header.style.flexWrap = 'wrap';

    const headerH2 = header.querySelector('h2');
    headerH2.style.margin = '0';
    headerH2.style.fontSize = '28px';

    styleNavigationLinks();
}

// 4. Profile Section Styles
function styleProfileSection() {
    const profile = document.querySelector('.profile');
    profile.style.display = 'flex';
    profile.style.justifyContent = 'center';
    profile.style.alignItems = 'center';
    profile.style.backgroundColor = '#f5f5f5';
    profile.style.padding = '50px 0';
    profile.style.marginTop = '20px';

    const profileContent = document.querySelector('.profile-content');
    profileContent.style.textAlign = 'center';
    profileContent.style.backgroundColor = '#d0ddb7';
    profileContent.style.borderRadius = '15px';
    profileContent.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    profileContent.style.padding = '30px';
    profileContent.style.width = '80%';
    profileContent.style.maxWidth = '600px';

    styleProfileImage();
    styleProfileText();
}

// 5. Skills Section Styles
function styleSkillsList() {
    const skills = document.querySelector('.skills');
    skills.style.padding = '20px';
    skills.style.fontSize = '20px';
}

// 6. Bikes Section Styles
function styleBikesSection() {
    const bikes = document.querySelector('.eigth');
    bikes.style.padding = '20px';
    bikes.style.fontSize = '20px';
}

// 7. Contact Section Styles
function styleContactInfo() {
    const contact = document.querySelector('.sixth');
    contact.style.padding = '20px';
    contact.style.fontSize = '20px';
}

// 8. Address Section Styles
function styleAddressSection() {
    const address = document.querySelector('.fifth');
    address.style.padding = '20px';
    address.style.fontSize = '20px';
}

// 9. Education Section Styles
function styleEducationTable() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.style.width = '90%';
        table.style.margin = '20px auto';
        table.style.borderCollapse = 'collapse';
        table.style.textAlign = 'center';
        table.style.fontSize = '18px';

        const ths = table.querySelectorAll('th');
        ths.forEach(th => {
            th.style.padding = '10px';
            th.style.border = '1px solid black';
        });

        const tds = table.querySelectorAll('td');
        tds.forEach(td => {
            td.style.padding = '10px';
            td.style.border = '1px solid black';
        });

        const caption = table.querySelector('caption');
        if (caption) {
            caption.style.marginBottom = '10px';
            caption.style.fontSize = '20px';
            caption.style.fontWeight = 'bold';
        }
    });
}

// 10. Footer Styles
function setupFooterStyles() {
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = '#47532e';
    footer.style.textAlign = 'center';
    footer.style.padding = '20px';
    footer.style.marginTop = '20px';
    footer.style.color = 'white';

    const footerH3 = footer.querySelector('h3');
    footerH3.style.margin = '10px 0';

    styleSocialLinks();
}

// Helper Functions
function styleFormBlocks() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.style.display = 'flex';
        block.style.alignItems = 'center';
        block.style.justifyContent = 'space-between';
        block.style.marginBottom = '10px';
    });
}

function styleFormLabels() {
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.fontSize = '16px';
        label.style.fontWeight = 'bold';
        label.style.width = '100px';
    });
}

function styleFormInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.flexGrow = '1';
        input.style.padding = '8px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
        input.style.fontSize = '14px';
    });
}

function styleFormButton() {
    const button = document.querySelector('button');
    button.style.width = '100%';
    button.style.padding = '10px';
    button.style.backgroundColor = '#28a745';
    button.style.border = 'none';
    button.style.color = 'white';
    button.style.fontSize = '16px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#218838';
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#28a745';
    });
}

function styleLoginInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.width = '90%';
        input.style.padding = '10px';
        input.style.margin = '10px 0';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
        input.style.fontSize = '16px';
    });
}

function styleLoginButton() {
    const button = document.querySelector('button');
    button.style.width = '100%';
    button.style.padding = '10px';
    button.style.backgroundColor = '#28a745';
    button.style.border = 'none';
    button.style.color = 'white';
    button.style.fontSize = '18px';
    button.style.borderRadius = '5px';
    button.style.marginTop = '10px';
    button.style.cursor = 'pointer';

    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#218838';
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#28a745';
    });
}

function styleNavigationLinks() {
    const nav = document.querySelector('nav');
    nav.style.display = 'flex';
    nav.style.flexWrap = 'wrap';
    nav.style.gap = '15px';

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.style.textDecoration = 'none';
        link.style.color = 'white';
        link.style.fontSize = '18px';
        link.style.padding = '6px 12px';
        link.style.borderRadius = '5px';

        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#a4b465';
            this.style.color = 'black';
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = 'white';
        });
    });
}

function styleProfileImage() {
    const roundPic = document.querySelector('.round_picture');
    if (roundPic) {
        roundPic.style.width = '180px';
        roundPic.style.height = '180px';
        roundPic.style.borderRadius = '50%';
        roundPic.style.border = '4px solid #47532e';
        roundPic.style.objectFit = 'cover';
        roundPic.style.marginBottom = '20px';
        roundPic.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }
}

function styleProfileText() {
    const profileH2 = document.querySelector('.profile-content h2');
    profileH2.style.fontSize = '28px';
    profileH2.style.fontWeight = 'bold';
    profileH2.style.color = '#333';
    profileH2.style.marginBottom = '15px';

    const aboutPara = document.querySelector('.about-para');
    if (aboutPara) {
        aboutPara.style.fontSize = '16px';
        aboutPara.style.lineHeight = '1.6';
        aboutPara.style.color = '#555';
        aboutPara.style.marginTop = '10px';
        aboutPara.style.fontFamily = 'Arial, sans-serif';
    }
}

function styleSocialLinks() {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.style.height = '40px';
        link.style.width = '40px';
        link.style.borderRadius = '10px';
        link.style.margin = '0 10px';

        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function handleResize() {
    if (window.innerWidth <= 768) {
        // Mobile styles
        const header = document.querySelector('header.navbar');
        header.style.flexDirection = 'column';
        header.style.alignItems = 'flex-start';

        const nav = document.querySelector('nav');
        nav.style.flexDirection = 'column';
        nav.style.gap = '10px';
        nav.style.marginTop = '10px';

        const roundPic = document.querySelector('.round_picture');
        if (roundPic) {
            roundPic.style.width = '140px';
            roundPic.style.height = '140px';
        }

        const profileContent = document.querySelector('.profile-content');
        if (profileContent) {
            profileContent.style.width = '90%';
            profileContent.style.padding = '20px';
        }

        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            table.style.fontSize = '16px';
            table.style.width = '95%';
        });

        const sections = [
            document.querySelector('.skills'),
            document.querySelector('.eigth'),
            document.querySelector('.fifth'),
            document.querySelector('.sixth'),
            document.querySelector('.seventh')
        ];
        
        sections.forEach(section => {
            if (section) {
                section.style.fontSize = '18px';
                section.style.padding = '15px';
            }
        });

        const aboutPara = document.querySelector('.about-para');
        if (aboutPara) {
            aboutPara.style.fontSize = '15px';
        }

        const footer = document.querySelector('footer');
        footer.style.padding = '15px';

        const links = document.querySelectorAll('.link');
        links.forEach(link => {
            link.style.height = '35px';
            link.style.width = '35px';
        });
    } else {
        // Desktop styles
        const header = document.querySelector('header.navbar');
        header.style.flexDirection = 'row';
        header.style.alignItems = 'center';

        const nav = document.querySelector('nav');
        nav.style.flexDirection = 'row';
        nav.style.gap = '15px';
        nav.style.marginTop = '0';

        const roundPic = document.querySelector('.round_picture');
        if (roundPic) {
            roundPic.style.width = '180px';
            roundPic.style.height = '180px';
        }

        const profileContent = document.querySelector('.profile-content');
        if (profileContent) {
            profileContent.style.width = '80%';
            profileContent.style.padding = '30px';
        }

        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            table.style.fontSize = '18px';
            table.style.width = '90%';
        });

        const sections = [
            document.querySelector('.skills'),
            document.querySelector('.eigth'),
            document.querySelector('.fifth'),
            document.querySelector('.sixth'),
            document.querySelector('.seventh')
        ];
        
        sections.forEach(section => {
            if (section) {
                section.style.fontSize = '20px';
                section.style.padding = '20px';
            }
        });

        const aboutPara = document.querySelector('.about-para');
        if (aboutPara) {
            aboutPara.style.fontSize = '16px';
        }

        const footer = document.querySelector('footer');
        footer.style.padding = '20px';

        const links = document.querySelectorAll('.link');
        links.forEach(link => {
            link.style.height = '40px';
            link.style.width = '40px';
        });
    }
}

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('form[action="login.html"]')) {
        applyRegistrationStyles();
    } else if (document.querySelector('form[action="page1.html"]')) {
        applyLoginStyles();
    } else if (document.querySelector('header.navbar')) {
        setupHeaderStyles();
        styleProfileSection();
        styleSkillsList();
        styleBikesSection();
        styleContactInfo();
        styleAddressSection();
        styleEducationTable();
        setupFooterStyles();
        
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call
    }
});