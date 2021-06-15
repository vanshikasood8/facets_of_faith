var sliderbutton = document.getElementById('slider-button'),
leftbutton = document.getElementById('leftbutton'),
rightbutton = document.getElementById('rightbutton'),
imagelist = document.getElementById('image'),
para = document.getElementById('para');
var nameof = document.getElementById('name'),
x = 1,
contentlist = [
    [
        ` “ I personally think that visits to different places were great! There was so much to learn from different speakers, especially from Mr. Piyush Kukrety. 
        I wish there were more visits to different places of worship. Facets of Faith would be memorable. ”`,
        '- Khushi Jain',

    ],
    [
        `
“Facets of Faith has been a wonderful experience so far. 
There was so much that I had no idea of, like Judaism. 
It was so new for me. Also the team members gave wonderful ideas regarding volunteering, initiatives of GPF India ,
and other organizations. Thank you so much everyone!” `,
        '- Karan Rawat',
    ],
    [
        ` “The sessions have genuinely encouraged me to look into religion and the different faiths, 
        something that I have been ignorant about most of my life and 
        something that I haven't considered to be an important part of my life.”`,
        '- Tanveer Kaur',

    ],
    [
        ` “As an intern here I was able to understand in depth the different religions 
        from the respected speakers who elaborately briefed about the major events, major influences ,
         the important interpretations ,
         historical evolution of respective religions , its tradition and major teachings  ”`,
        '- Siddhant Bhargava ',

    ],
    [
        ` “ I am just so happy to be a part of facets of faith. I would love to visit all the religious places and meet 
        and thank all the speakers to enlighten us on various topics. I’m filled with nothing but gratitude. ”`,
        '- Mhd Maaz',

    ],
    [
        ` “ The most fruitful session for me was the Sikhism one where ma'am explained the 
        meaning of the mool mantra. Although 
        I knew the mantra and somewhat its meaning but the way it was explained and addressed was really great. ”`,
        '- Jaya',

    ],
    [
        `“ Discussion around real time case studies and understanding pros and cons of the same and what could 
        have worked well ”`,
        '- Anjali Bharti ',

    ],
    [
        `“ The program was great in terms of expansive views and diversity of speakers but
         I think this time since it was done virtually not all things have gotten importance 
         like for a speaker and as audience to gather thoughts 1 hr. session is a bit less. ”`,
        '- Anisha Bara',

    ],

];


leftbutton.addEventListener('mouseup', async function (event) {


if (x > 1) {
    x -= 1;

    const lastnum = imagelist.style.getPropertyValue('transform').length - 3;
    var xoffsetvalue = +imagelist.style.getPropertyValue('transform').substring(11, lastnum) + 250;

    imagelist.style.transform = `translateX(${xoffsetvalue}px)`;
    para.innerText = '';
    para.innerText = contentlist[x - 1][0];
    nameof.innerText = '';
    nameof.innerText = contentlist[x - 1][1];
 
    para.style.animation = 'funtoos';
    para.style.animationDuration = '1s';

    await setTimeout(function (event) {

        para.style.animation = 'none';
        console.log('reset done');

    }, 1000);


}





});



rightbutton.addEventListener('mouseup', async function (event) {
if (x != imagelist.children.length && x < imagelist.children.length) {

    x += 1;
    console.log(imagelist.children.length, x);
    if (x <= imagelist.children.length) {



        const lastnum = imagelist.style.getPropertyValue('transform').length - 3;
        var xoffsetvalue = +imagelist.style.getPropertyValue('transform').substring(11, lastnum) - 250;

        imagelist.style.transform = `translateX(${xoffsetvalue}px)`;

        para.innerText = '';
        para.innerText = contentlist[x - 1][0];
        nameof.innerText = '';
        nameof.innerText = contentlist[x - 1][1];
    
        para.style.animation = 'funtoos';
        para.style.animationDuration = '1s';

        await setTimeout(function (event) {

            para.style.animation = 'none';
            console.log('reset done');

        }, 1000);

    }




}



});