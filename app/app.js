class Client {
    constructor() {
        this.moreInfo()
    }
    moreInfo() {
        let plus = document.querySelectorAll('.plus');
        let information = document.querySelectorAll('.hide-info');

        for (let i = 0; i < plus.length; i++) {
            plus[i].addEventListener('click', () => {
                if (information[i].hidden) {
                    information[i].hidden = false;
                    plus[i].style = `background-image: url(../acess/Rectangle.svg); width: 18px;
                    height: 18px; background-repeat: no-repeat; margin-top:10px`;
                } else {
                    information[i].hidden = true;
                    plus[i].style = `background-image: url(../acess/Frame.svg);`;
                }

            });

        }
    }
}
const client = new Client()
