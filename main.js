var panorama1, panorama2, panorama3, panorama4, panorama5, viewer, container;

container = document.querySelector( '#container' );
// panel = document.querySelector('#panel');



// Focus tweening parameter
parameters = {
	duration: 1000,
	curve: 'Exponential',
	easing: 'Out',
	iterative: false
  };
infospots = {
	pano1:[{x:5000.00,y:-3292,z:-1629},{x:5000.00,y:-2878,z:-512},{x:5000.00,y:-3006,z:792},{x:5000.00,y:-2248,z:-1883},{x:3814,y:-1987,z:5000}],
	pano2:[{x:5000, y:-1881, z:-3309},{x:5000, y:-1934, z:176},{x:4032.27, y:-3613, z:5000}],
	pano3:[],
	pano4:[]
}


//panorama1
panorama1 = new PANOLENS.ImagePanorama( 'asset/field.jpg' );

//panorama2
panorama2 = new PANOLENS.ImagePanorama( 'asset/field2.jpg' );

//panorama3
panorama3 = new PANOLENS.ImagePanorama( 'asset/field3.jpg' );

//panorama4
panorama4 = new PANOLENS.ImagePanorama( 'asset/field4.jpg' );

//panorama5
// panorama5 = new PANOLENS.ImagePanorama( 'asset/field5.jpg' );




viewer = new PANOLENS.Viewer( {output: 'console', container: container } );
viewer.add( panorama1);
addInfoSpot(1,infospots.pano1);
addInfoSpot(2,infospots.pano2);

//linking




// var renderer, camera, scene, box;

// renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0xffffff);
// renderer.setSize(panel.clientWidth, panel.clientHeight);
// camera = new THREE.PerspectiveCamera(45, panel.clientWidth / panel.clientHeight, 1, 2000);
// scene = new THREE.Scene();
// infospot.element.appendChild( renderer.domElement );

// box = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshNormalMaterial());
// box.position.z = -20;
// scene.add( box );

// viewer.addUpdateCallback(function(){
//   renderer.render(scene, camera);
//   box.rotation.y += 0.03;
// });


function addInfoSpot(panoId, panoInfo){
	
	for(let i = 0; i < panoInfo.length; i ++){
		var infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
		infospot.position.set( panoInfo[i].x, panoInfo[i].y, panoInfo[i].z);
		
		// infospot.addEventListener( 'click', onFocus );
		var panel_id = 'panel'+panoId+'_'+(i+1);
		var panel_html = '<div id='+panel_id+' class="panel"><model-viewer src="asset/car4.gltf" alt="A 3D model of an astronaut" ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer><h4  class="product-name">Good Car</h4><div>Nice Fast Econoimc Car<a class="product-link" href="https://www.google.com/search?q=Modway+Prim+Mid-Back+Task+Chair&source=univ&tbm=shop" target="_blank">...more</a></div><div class="proudct-price">US$90.99</div><div class="product-attribute">Rating</div><div> <i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star</i><i class="material-icons">star_half</i><i class="material-icons">star_border</i></div></div>';
		$('#container').after(panel_html);
		var panel = document.querySelector('#'+panel_id);
		// panel = $('#panel')[0];
		infospot.addHoverElement( panel, 200 );

		switch(panoId){
			case 1:
				panorama1.add( infospot );
				break;
			case 2:
				panorama2.add( infospot );
				break;
			case 3:
				panorama3.add( infospot );
				break;
			case 4:
				panorama4.add( infospot );
				break;
			default:
				panorama1.add( infospot );
				break;
		}  
	}
	return;
}
function animate(){
	
}
function onFocus () {

	this.focus( parameters.duration, TWEEN.Easing[ parameters.curve ][ parameters.easing ] );
	
}