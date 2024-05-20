/*const opt = document.getElementById('gender');
const opt1=document.getElementById('subject');
for (let i = 0; i < opt.options.length; i++) {
    for(let j=0;j<opt1.options.length;j++){
        if (opt.options[i].value === 'gay')
        {
           opt1.remove('science');
           
       }
    }
    
} */

/*const opt = document.getElementById('gender');
const opt1 = document.getElementById('subject');

for (let i = 0; i < opt.options.length; i++) {
    if (opt.options[i].value === 'gay' && opt.options[i].selected) {
        for (let j = 0; j < opt1.options.length; j++) {
            if (opt1.options[j].value === 'Science') {
                opt1.remove(j);
                break; // Exit the loop once the option is removed
            }
        }
    }
}*/
document.getElementById('gender').addEventListener('change', function() {
    const genderSelect = document.getElementById('gender');
    const subjectSelect = document.getElementById('subject');
    if (genderSelect.value === 'gay') {
    
        for (let i = 0; i < subjectSelect.options.length; i++) {
            if (subjectSelect.options[i].value === 'Science') {
             subjectSelect.remove(i);
                break;
            }
        }
    } else {
       
        let scienceExists = false;
        for (let i = 0; i < subjectSelect.options.length; i++) {
            if (subjectSelect.options[i].value === 'Science') {
                scienceExists = true;
                break;
            }
        }
        if (!scienceExists) {
            const newOption = document.createElement('option');
            newOption.value = 'Science';
            newOption.text = 'Science';
            subjectSelect.add(newOption, subjectSelect.options[1]);
        }
    }
});



