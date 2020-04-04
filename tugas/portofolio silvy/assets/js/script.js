let count = 0

const defaultMain = () => {
    if (count != 0) {
        document.getElementById('fontjumbo').innerHTML =
            `<h1 id="h1Main" style="text-align: center;
            font-size: 74px;
            font-family: serif !important; opacity:0; transition: 0.5s;">Hello! Silvy's Here</h1>`
        setTimeout(function () {
            document.getElementById('h1Main').style.opacity = '1'
        }, 1)
        count = 0
    }
}

const geserIntro = () => {
    document.getElementById("fontjumbo").innerHTML = `<h1 id="big-text-intro" class="transisi">Let me Introduce Myself ... </h1>`
    setTimeout(function () {
        document.getElementById('big-text-intro').style.opacity = '1'
    }, 1)
    count = 1
}

const geserAbout = () => {
    document.getElementById("fontjumbo").innerHTML = `<h1 id="big-text-intro" class="transisi ">See Everything About me</h1>`
    setTimeout(function () {
        document.getElementById('big-text-intro').style.opacity = '1'
    }, 1)
    count = 1
}

const geserPortofolio = () => {
    document.getElementById("fontjumbo").innerHTML = `<h1 id="big-text-intro" class="transisi ">See My Portfolio</h1>`
    setTimeout(function () {
        document.getElementById('big-text-intro').style.opacity = '1'
    }, 1)
    count = 1
}

const geserContact = () => {
    document.getElementById("fontjumbo").innerHTML = `<h1 id="big-text-intro" class="transisi">You can find me</h1>`
    setTimeout(function () {
        document.getElementById('big-text-intro').style.opacity = '1'
    }, 1)
    count = 1
}

const geserAll = () => {
    document.getElementById("fontjumbo").innerHTML = `<h1 id="big-text-intro" class="transisi ">See All ...</h1>`
    setTimeout(function () {
        document.getElementById('big-text-intro').style.opacity = '1'
    }, 1)
    count = 1
}

const introDesc = () => {
    document.getElementById('isi').innerHTML = `
    <div id="intro" class="intro">
        <div class="row p-3">
            <div id="introduce" class="col-md-12 text-md-center col-12 text-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                    deserunt magnam similique numquam atque, dolore repellendus, maxime ipsa ea ab. Eaque quibusdam
                    unde magnam facere quae voluptatibus necessitatibus assumenda? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Possimus nesciunt fugiat saepe inventore, nihil omnis quod
                    consequatur, commodi est temporibus reiciendis cupiditate. Fugiat aliquid maxime veniam et
                    sequi consequuntur suscipit!</p>
            </div>
        </div>
    </div>`
    setTimeout(function () {
        document.getElementById('intro').style.opacity = '1'
    }, 1)
}






