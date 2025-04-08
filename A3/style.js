// 1. Function to style common elements
function styleCommonElements() {
    // Style all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.style.width = '100%';
        btn.style.padding = '10px';
        btn.style.backgroundColor = '#28a745';
        btn.style.border = 'none';
        btn.style.color = 'white';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';
        
        // Hover effect
        btn.onmouseover = () => btn.style.backgroundColor = '#218838';
        btn.onmouseout = () => btn.style.backgroundColor = '#28a745';
    });

    // Style all inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.padding = '8px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
    });

    // Style all links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = 'none';
        link.style.color = 'black';
        
        // Hover effect
        link.onmouseover = () => link.style.backgroundColor = '#c2b879';
        link.onmouseout = () => link.style.backgroundColor = 'transparent';
    });
}

// 2. Function to style registration form
function styleRegistrationForm() {
    const form = document.querySelector('form');
    form.style.color = '#47532e';
    form.style.backgroundColor = 'rgb(250, 255, 240)';
    form.style.padding = '20px';
    form.style.width = '350px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    form.style.textAlign = 'center';
    form.style.margin = '0 auto';
    
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.style.display = 'flex';
        block.style.alignItems = 'center';
        block.style.justifyContent = 'space-between';
        block.style.marginBottom = '10px';
    });
    
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.fontSize = '16px';
        label.style.fontWeight = 'bold';
        label.style.width = '100px';
    });
}

// 3. Function to style login form
function styleLoginForm() {
    const form = document.querySelector('form');
    form.style.background = 'white';
    form.style.padding = '20px';
    form.style.borderRadius = '10px';
    form.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)';
    form.style.textAlign = 'center';
    form.style.width = '300px';
    form.style.margin = '0 auto';
    
    const h2 = document.querySelector('h2');
    h2.style.marginBottom = '20px';
    h2.style.color = '#47532e';
}

// 4. Function to style portfolio header
function stylePortfolioHeader() {
    const header = document.querySelector('.first');
    header.style.color = 'black';
    header.style.textAlign = 'center';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.height = '100px';
    header.style.fontSize = 'large';
    header.style.backgroundColor = '#47532e';
}

// 5. Function to style profile section
function styleProfileSection() {
    const profile = document.querySelector('.second');
    profile.style.display = 'flex';
    profile.style.flexDirection = 'column';
    profile.style.justifyContent = 'center';
    profile.style.alignItems = 'center';
    profile.style.textAlign = 'center';
    profile.style.backgroundColor = '#a4b465';
    profile.style.color = 'black';
    profile.style.fontSize = 'large';
    profile.style.paddingTop = '1%';
    
    const img = document.querySelector('.round_picture');
    img.style.border = 'solid';
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.borderRadius = '50%';
}

// 6. Function to style navigation
function styleNavigation() {
    const nav = document.querySelector('.fourth');
    nav.style.textAlign = 'center';
    nav.style.backgroundColor = '#626F47';
    nav.style.color = 'black';
    nav.style.display = 'flex';
    nav.style.flexDirection = 'row';
    nav.style.alignItems = 'center';
    nav.style.justifyContent = 'center';
    nav.style.fontSize = 'large';
    nav.style.gap = '10px';
    nav.style.paddingBottom = '1%';
}

// 7. Function to style iframe
function styleIframe() {
    const iframe = document.querySelector('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    iframe.style.border = 'none';
}

// 8. Function to style footer
function styleFooter() {
    const footer = document.querySelector('footer');
    footer.style.textAlign = 'center';
    footer.style.display = 'flex';
    footer.style.justifyContent = 'center';
    footer.style.alignItems = 'center';
    footer.style.height = '100px';
    footer.style.backgroundColor = '#47532e';
    footer.style.paddingBottom = '2%';
    
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.style.height = '50px';
        link.style.width = '50px';
        link.style.borderRadius = '25%';
    });
}

// 9. Function to style content sections
function styleContentSections() {
    const sections = document.querySelectorAll('.fifth, .sixth, .seventh, .eigth');
    sections.forEach(section => {
        section.style.fontSize = 'x-large';
    });
}

// 10. Main function to apply all styles
function applyStyles() {
    styleCommonElements();
    
    if (document.querySelector('#regForm')) {
        styleRegistrationForm();
    } else if (document.querySelector('#loginForm')) {
        styleLoginForm();
    } else if (document.querySelector('.first')) {
        stylePortfolioHeader();
        styleProfileSection();
        styleNavigation();
        styleIframe();
        styleFooter();
        styleContentSections();
    }
}

// Run when page loads
window.onload = applyStyles;