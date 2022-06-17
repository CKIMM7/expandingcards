Explanation of the code

HTML/CSS code that we will mostly be working with:

        <div class="panel active"
        style="background-image: url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
          <h3>Explore The World</h3>
        </div>

        <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
          <h3>Wild Forest</h3>
        </div>

        <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')">
          <h3>Sunny Beach</h3>
        </div>... there is 2 more


CSS that defines the dimentions of our 5 panels

  .panel {
    border: solid black 3px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    -webkit-transition: all 700ms ease-in;
  }
  
  One with 'active' class gets this extra or overwriting CSS
  
   .panel.active {
  flex: 5;
}

.panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }

The code below saves html dom nodes as a NodeList which returns
a collection of document nodes which in this case returns elements
in an array like collection for us to access and control our dom nodes.
The NodeList comes with different properties but we are interested in 
forEach method which acts just like forEach method that we use on an array.

const panels = document.querySelectorAll('.panel')

Because we are using CSS class to expand the card that is clicked on, 
so we need to add an event listener to every element node so that it will
take off the current 'active' class and add 'active' to the class whose 
dom element we clicked on. and this is done by the code below:

panels.forEach(panel => {

    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

To remove 'active' class, it calls on removeActiveClasses function which 
goes through each which element node and takes off 'active' class if there
is one.

function removeActiveClasses() {

    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

after removeActiveClasses function is called, we add class 'active' to the 
element node that we just clicked on.
