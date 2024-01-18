function createCalculator() {
    return {
        display: document.querySelector('.display'),

        initiate() {
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.countResult();
                }
            });
        },

        countResult() {
            let count = this.display.value;

            try {
                count = eval(count);

                if (!count && count !== 0) {
                    alert('Conta inválida');
                    return;
                }

                count = parseFloat(count.toFixed(5));

                this.display.value = String(count);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deletesOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButtons() {
            //this -> calculator
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deletesOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.countResult();
                }

                this.display.focus();
            });
        },

        btnToDisplay(v) {
            this.display.value += v;
        }
    };
}

const calculator = createCalculator();
calculator.initiate();
