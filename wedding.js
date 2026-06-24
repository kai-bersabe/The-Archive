const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".package-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => {
            btn.classList.remove("active");
        });

        contents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        const target = document.getElementById(
            tab.dataset.tab
        );

        if(target){
            target.classList.add("active");
        }

    });

});

/*BOOK PACKAGE*/

const packageButtons =
    document.querySelectorAll(".package-btn");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const packageName =
            button.closest(".package-card")
                  .querySelector("h3")
                  .textContent;

        alert(
            `You selected the "${packageName}" package.\n\nPlease proceed with booking.`
        );

    });

});

/*SMOOTH CARD ANIMATION*/

const cards =
    document.querySelectorAll(".package-card");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

cards.forEach(card => {
    observer.observe(card);
});
