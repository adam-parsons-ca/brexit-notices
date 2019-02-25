const App = (() => {
  const render = () => {
    // revealables
    const revealableHeadingTag = document.querySelectorAll('.revealable__heading');
    const expandCloseTag = document.querySelectorAll('.expand-close');
    const theBoxTag = document.getElementById('the-box');


    revealableHeadingTag.forEach(function (revealableHeadingTag) {
      revealableHeadingTag.addEventListener('click', function (e) {
        const revealableContent = this.nextSibling.nextSibling
        if (revealableContent.classList.contains('slide--hidden')) {
          revealableContent.classList.remove('slide--hidden')
          this.children[0].innerHTML = '-'
        } else {
          revealableContent.classList.add('slide--hidden');
          this.children[0].innerHTML = '+'
        };
      });
    });


    // brexit notice 
    const signupMessageTag = document.querySelector('.signup-message');
    const signupLinkTag = document.querySelector('.signup-link');
    const signupButtonTag = document.querySelector('.signup-button');
    const signupTag = document.querySelector('.signup');
    const confirmationTag = document.querySelector('.confirmation');

    confirmationTag.style.display = 'none'
    signupTag.style.display = 'none'

    signupLinkTag.addEventListener('click', function () {
      signupTag.style.display = ''
    })

    signupButtonTag.addEventListener('click', function () {
      confirmationTag.style.display = ''
      signupMessageTag.style.display = 'none'
      signupTag.style.display = 'none'

    })
  };

  return {
    render: render,
  };
})();

App.render();
