export default function Projects() {
    return (
        <div>
            <article id="portfolio" class="wrapper style1">
				<div class="container">
					<header>
						<h2>Portfolio</h2>
						<div class="centered line"></div>
					</header>
					<div class="row">
                        <div class="col-4 col-6-medium col-12-small">
                            <article class="box style2">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dannguyen9219/dinorun_game" class="image featured"><img src="dinorun.png" alt="dinorun" /></a>
                                <h3><a target="_blank" rel="noopener noreferrer" href="https://github.com/dannguyen9219/dinorun_game">Dino Run</a></h3>
                                <p>Project 1 - Dino Run is a vanilla JavaScript game. Take control of Blue, a velociraptor as you try to escape the Isla Nublar.</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://dannguyen9219.github.io/dinorun_game/" class="button">Launch App</a>
                            </article>
					    </div>
						<div class="col-4 col-6-medium col-12-small">
                            <article class="box style2">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/dannguyen9219/ladybug_project2" class="image featured"><img src="ladybugLogo-BG-palette2.png" alt="Ladybug" /></a>
                                <h3><a target="_blank" rel="noopener noreferrer" href="https://github.com/dannguyen9219/ladybug_project2">Ladybug</a></h3>
                                <p>A bug tracking app that uses full CRUD and follows MVC. Great way to track all of your bugs.</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://dannguyen-ladybug.herokuapp.com/" class="button">Launch App</a>
                            </article>
					    </div>
					</div>
				</div>
			</article>
        </div>
    )
};