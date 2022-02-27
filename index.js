import './index.css';
import {HelpClass} from './src/utils';

class Donate{
    constructor(){
        this.donatesContainer = document.querySelector("[class*='container__donates']");
        this.form = document.querySelector("form");
        this.totalAmount = document.querySelector("#total-amount");

        this.input = this.form.querySelector("input[type='number']");
        this.submit = this.form.querySelector("button[type='submit']");
    }
}

const donateClass = new Donate();
const help = new HelpClass();

donateClass.submit.addEventListener("click", e => {
    e.preventDefault();

    const now = help.dateString(new Date());
    const donate = donateClass.input.value;

    const donateItem = document.createElement("div");
    donateItem.className = "donate-item";
    donateItem.append(now);

    const b = document.createElement("b");
    
    b.textContent = ` - ${donate}$`;
    donateItem.append(b);

    donateClass.donatesContainer.append(donateItem);

    donateClass.input.value = "";
    help.setSum(donate, donateClass.totalAmount);
});


