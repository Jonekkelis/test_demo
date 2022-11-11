const cat_result = document.getElementById( 'cat-result' );
const dog_result = document.getElementById( 'dog-result' );
const fox_result = document.getElementById( 'fox-result' );
const cat_btn = document.getElementById( 'cat-btn' );
const dog_btn = document.getElementById( 'dog-btn' );
const fox_btn = document.getElementById( 'fox-btn' );

cat_btn.addEventListener( 'click', getRandomCat );
dog_btn.addEventListener( 'click', getRandomDog );
fox_btn.addEventListener( 'click', getRandomFox );

function getRandomCat() {
	fetch( 'https://aws.random.cat/meow' )
		.then( res => res.json() )
		.then( data => {
			cat_result.innerHTML = `<img src="${data.file}" />`;
		} );
}

function getRandomDog() {
	fetch( 'https://random.dog/woof.json' )
		.then( res => res.json() )
		.then( data => {
			if ( data.url.includes( '.mp4' ) ) {
				getRandomDog();
			} else {
				dog_result.innerHTML = `<img src="${data.url}" />`;
			}
		} );
}
