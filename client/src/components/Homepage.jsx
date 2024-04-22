import '../output.css';
import { Menu } from './Menu';
import LoginButton from './LoginButton.jsx';
import githubicon from '../assets/icons8-github-60.png';
import discordicon from '../assets/icons8-discord-94.png';
import hero from '../assets/hero.png';
import audioicon from '../assets/icons8-audio-file-75.png';
import videoicon from '../assets/icons8-video-file-75.png';
import pdficon from '../assets/icons8-pdf-75.png';
import docicon from '../assets/icons8-document-75.png';
import xlsicon from '../assets/icons8-xls-75.png';
import zipicon from '../assets/icons8-zip-75.png';
import svgicon from '../assets/icons8-image-75.png';
import txticon from '../assets/icons8-txt-75.png';
import ppticon from '../assets/icons8-ppt-75.png';
import xmlicon from '../assets/icons8-xml-75.png';
import wordicon from '../assets/icons8-word-file-75.png';
import imageicon from '../assets/icons8-image-file-75.png';
import { useAuth0 } from "@auth0/auth0-react";
import ClipboardJS from 'clipboard';

export function HomePage() {
	
	const { user, isAuthenticated, isLoading,logout } = useAuth0();
  
	if (isLoading) {
	  return <div class="flex flex-wrap justify-center">
		<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-700 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>


	  </div>
	}

	return (
		<div class=" h-[89vh] bg-gradient-to-bl from-transparent via-red-300 to-green-200 dark:bg-gradient-to-tr dark:from-transparent dark:to-transparent ">
		<div class=" float-right transition ease-in  opacity-100  z-10 right-0 top-0 absolute m-3 p-4" >

{ isAuthenticated && (
    <div className=" h-18 hover:cursor-pointer  w-wrap p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding " >
	<div class="rounded-full"><img class="h-14 rounded-full" src={user.picture}></img></div>
	

	<div class=" flex flex-col" >
	<span class="flex justify-start px-2 pt-3 font-bold">{user.name}</span>
	<span class="flex justify-center px-2 text-gray-500 dark:text-gray-200">{user.email}</span>
	</div>
	<button class="float-end right-3 px-4 py-3 pt-2 pl-3 absolute" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
</div>
    ) || (<>     <div className=" h-18 bg-white hover:cursor-pointer  w-32 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40" >
	<LoginButton/> </div> </>)}
	</div>

		<div class="home ">
			


						

<div class="flex flex-wrap justify-center gap-5 hidden" >
  <button type="button" class="rounded-lg border border-eden-500 bg-gradient-to-b to-eden-600 hover:from-eden-600 hover:to-eden-700 active:to-eden-700 active:from-eden-800 from-eden-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Button text</button>
  <button type="button" class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400">Button text</button>
  <button type="button" class="rounded-lg border border-primary-100 bg-primary-100 px-5 py-2.5 text-center text-sm font-medium text-primary-600 transition-all hover:border-primary-200 hover:bg-primary-200 focus:ring focus:ring-primary-50 disabled:border-primary-50 disabled:bg-primary-50 disabled:text-primary-400">Button text</button>
  <button type="button" class="rounded-lg border border-transparent bg-transparent px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-none transition-all hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-400">Button text</button>

</div>
<div class="flex flex-row">

<div class="flex flex-col">
<form  id="form" action = "http://localhost:5000/upload" method="POST" onSubmit={formSubmit} enctype="multipart/form-data" >

<div class="flex flex-wrap justify-start p-3">
<div class="ml-3 w-full m-3 card-shadow rounded-2xl h-96 border card-border-color overflow-hidden flex flex-col relative text-color" style="background-color: rgb(16, 108, 90); border-color: rgb(20, 135, 109); box-shadow: rgba(255, 255, 255, 0.15) 0px 4px 4px -2px inset; max-width: 310px;">
	<div class="p-4 sticky top-0 z-10">
		<div class="flex items-center gap-1.5">
			<div class="font-medium" style="color: rgb(255, 255, 255);">
				File Size
			</div>
			</div>
			</div>
			<div class="absolute top-1/3 -left-32 -translate-y-1/2 rounded-full w-80 h-80 blur-3xl mix-blend" style="background-color: rgb(34, 167, 135);">
				</div>
				<div class="absolute -top-56 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend" style="background-color: rgb(69, 194, 159);">

				</div>
				<div class="absolute top-12 left-6">
					<div class="flex items-start">
						<div id="file-size" class="text-6xl font-normal tracking-tighter" style="color: rgb(255, 255, 255);">
							0B
							</div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 ml-3" style="color: rgb(175, 235, 212);"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
						</svg>
						</div>
						<div class="mt-4 w-64" style="color: rgb(255, 255, 255);">

						<div class="flex items-center justify-center w-full">
						<label onClick={onlabelclick} for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 ">
							<div class="flex flex-col items-center justify-center pt-5 pb-6"   onDrop={drophandler}  onDragOver={dragOverHandler}  >
								<svg class="w-8 h-8 mb-4 text-gray-300 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
								</svg>
								<p class="mb-2 text-sm text-gray-300 dark:text-gray-200"><span class="font-semibold">Click to upload</span> or drag and drop</p>
								<p class="text-xs text-gray-300 dark:text-gray-400">DOC, XLS, PDF, TAR, MP3, MP4,<br/>  ZIP, SVG, PNG, JPG or GIF <br/> (MAX. 200MB)</p>
							</div>
							<input id="dropzone-file" type="file" name="file" multiple draggable onChange={selecthandler}  class="hidden" />
						</label>

					</div> 
						</div>
						</div>
						</div>

<div class="w-full card-shadow m-3 rounded-2xl h-96 border overflow-hidden card-border-color card-background-color" style="max-width: 310px;">
	<div class="p-4 top-0">
		<div class="w-full items-end">
			<div id="files" class="font-medium">Files
			<input id="submit-button" type = "submit" value="Upload" label="submit" class="ml-56 cursor-pointer text-eden-600"/>
		
			</div>
			</div>
			</div>
			<div class="p-4 pt-0 overflow-y-scroll h-72">
				<div class="space-y-2" id="file-list">
					


									</div>
									</div>
									</div>
		</div>
		</form>
		<div  class="relative drop-shadow-xl  w-[680px] h-64 overflow-hidden rounded-xl m-5 bg-[#a1dace]">
  <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-br from-[#1bb899] to-[#106c5a]">
  <div class="flex flex-col items-center">
  <div class="max-w-screen-2xl md:px-8">

        <h2 class="text-center text-xl font-bold bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent sm:text-2xl lg:text-left lg:text-3xl">Direct Link</h2>
        <p class="text-center text-gray-300 lg:text-left">You can share the direct link to your file</p>
      </div>

      <div class="flex flex-col items-center lg:items-end">

	  <div class="w-72">
    <div class="relative">
        <label for="npm-install-copy-button" class="sr-only">Label</label>
        <input id="target" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="https://go.doshare.me/slug/filename" disabled readonly />
        <button data-clipboard-action="copy" data-clipboard-text="https://doshare.me/slug/filename" class="absolute end-2 copy top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-copy-npm-install-copy-button" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message">Copy to clipboard</span>
            <span id="success-tooltip-message" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
	<span class="font-thin text-black dark:text-black">Note: Files are auto-deleted after 24 Hrs</span>
		</div>
		</div>

  </div>
  </div>
  <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
		</div>

</div>
<div class="flex flex-wrap justify-center shadow-sm rounded-full  m-20">

	<div class="flex flex-col rounded-full justify-center m-20">
		<div class="justify-center gap-5">
			<img src="https://cdn.dribbble.com/users/1243471/screenshots/19917954/media/489417f61466a95e3b15a4f22847e9c0.gif" alt="" class=" w-80 rounded-lg shadow-md shadow-slate-600" />
			{/* <video src="https://cdn.dribbble.com/userupload/12655803/file/original-83d0227b9c22570ad5f5d702a2a0032c.mp4" loop muted autoplay class="w-96"></video> */}
			<span class="font-thin p-3">
				
			<h2 class="text-3xl justify-center text-justify "> ⛳ Effortlessly Share Your Files, Anywhere</h2>

			Share documents, photos, and videos instantly. Secure and hassle-free.

			</span>

		</div>
	</div>
</div>

</div>
		</div>
		<div class="flex flex-wrap justify-center gap-5">
			<a href="https://discord.gg/T8VFeyRZWk" target="_blank" >
			  <button type="button" class="rounded-lg border border-eden-500 bg-gradient-to-b to-eden-600 hover:from-eden-600 hover:to-eden-700 active:to-eden-700 active:from-eden-800 from-eden-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Join Our Discord <img src={discordicon} class="h-6 w-6 inline-flex"/></button>
			  </a>
			  <button type="button" class="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 focus:ring focus:ring-gray-100 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"><img src={githubicon} alt="GitHub Icon with Link to doshare Repository" class="h-6 w-6 inline-flex"/> Star on Github</button>
		</div>

		<div class="attributes float-end text-lg font-thin">
		Icons by <a target="_blank" class="font-bold" href="https://icons8.com">Icons8</a>
		</div>
		</div>
		
	);
}

var cachedt= new DataTransfer();
var cachedtarray = [];
var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
	var tooltip = document.getElementById('tooltip-copy-npm-install-copy-button');
	var defaultIcon = document.getElementById('default-icon');
	var successIcon = document.getElementById('success-icon');
	var defaultTooltipMessage = document.getElementById('default-tooltip-message');
	var successTooltipMessage = document.getElementById('success-tooltip-message');
	tooltip.classList.remove('invisible');
	tooltip.classList.add('visible');
	defaultIcon.classList.add('hidden');
	successIcon.classList.remove('hidden');
	defaultTooltipMessage.classList.add('hidden');
	successTooltipMessage.classList.remove('hidden');
	setTimeout(function() {
	  tooltip.classList.remove('visible');
	  tooltip.classList.add('invisible');
	  defaultIcon.classList.remove('hidden');
	  successIcon.classList.add('hidden');
	  defaultTooltipMessage.classList.remove('hidden');
	  successTooltipMessage.classList.add('hidden');
	}, 2000);
});
function formSubmit(event) {
	document.getElementById('submit-button').hidden = true;
	document.getElementById('files').innerHTML+=`<div id="loading"
	class="float-right inline-block h-8 w-8 animate-spin rounded-full text-eden-600 border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
	role="status">
	<span
	  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
	  >Loading...</span
	>
  </div>`

	var url = "https://doshare.onrender.com/upload";
	var request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.onload = function() { // request successful
	// we can use server response to our request now
	  console.log(request.responseText);
	  var response = JSON.parse(request.responseText);
	  console.log(response);
	  if(request.status == 200){
		document.getElementsByClassName('copy')[0].setAttribute('data-clipboard-text', 'https://go.doshare.me/'+response.slug+'/'+document.getElementById('dropzone-file').files[0].name);
		document.getElementById('target').value = 'https://go.doshare.me/'+response.slug+'/'+document.getElementById('dropzone-file').files[0].name;

		document.getElementById('file-list').innerHTML = '';
		document.getElementById('file-size').innerText = '0B';
		document.getElementById('dropzone-file').files = new DataTransfer().files;
		cachedt = new DataTransfer();
		cachedtarray = [];
		document.getElementById('submit-button').removeAttribute('hidden');
		document.getElementById('loading').remove();

	}
	};
	request.onerror = function() {
	  // request failed
	};
  
	request.send(new FormData(event.target)); // create FormData from form that triggered event
	event.preventDefault();
  }
  

  

function onlabelclick(event){
	if(cachedtarray.length==0){
	for (let i = 0; i < document.getElementById('dropzone-file').files.length; i++) {
		cachedt.items.add(document.getElementById('dropzone-file').files[i])
		cachedtarray.push(document.getElementById('dropzone-file').files[i].name);
	}
	console.log('cachedt:',cachedt.files);
	}
}

function selecthandler(event){
	console.log(event.target.files);
	console.log('selected file size:',(event.target.files[0].size/1024/1024).toPrecision(3),'MB');
	if(event.target.files[0].size/1024/1024/1024>1){
		document.getElementById('file-size').innerText = (event.target.files[0].size/1024/1024/1024).toPrecision(2)+'GB';
		console.log('file size is greater than 1GB');
	}else if(event.target.files[0].size/1024/1024>1){
		document.getElementById('file-size').innerText = (event.target.files[0].size/1024/1024).toPrecision(2)+'MB';
		console.log('file size is greater than 1MB');
	}
	else if(event.target.files[0].size/1024>0.5){
		document.getElementById('file-size').innerText = (event.target.files[0].size/1024).toPrecision(3)+'kB';
		console.log('file size is greater than 1kB');
	}
	else{
		document.getElementById('file-size').innerText = event.target.files[0].size+'B';
		console.log('file size is less than 1kB');
	}
	for(var i=0;i<event.target.files['length'];i++){
		var filesize="0B";
		var file=event.target.files[i];
		if(file.size/1024/1024/1024>1){
			filesize = (file.size/1024/1024/1024).toPrecision(2)+'GB';
		}else if(file.size/1024/1024>1)
		{
			filesize = (file.size/1024/1024).toPrecision(2)+'MB';
		}
		else if(file.size/1024>0.5){
			filesize = (event.target.files[0].size/1024).toPrecision(3)+'kB';
			console.log('file size is greater than 1kB');
		}
		else{
			filesize = event.target.files[0].size+'B';
		}
		var placeholderurl = '';
		if(event.target.files[i].name.split('.').pop()=='jpg'||event.target.files[i].name.split('.').pop()=='png'||event.target.files[i].name.split('.').pop()=='gif'){
			placeholderurl = imageicon;
		}
		else if(event.target.files[i].name.split('.').pop()=='mp4'||event.target.files[i].name.split('.').pop()=='mp3'){
			placeholderurl = videoicon;
		}
		else if(event.target.files[i].name.split('.').pop()=='pdf'){
			placeholderurl = pdficon;
		}
		else if(event.target.files[i].name.split('.').pop()=='doc'||event.target.files[i].name.split('.').pop()=='docx'){
			placeholderurl = wordicon;
		}
		else if(event.target.files[i].name.split('.').pop()=='xls'||event.target.files[i].name.split('.').pop()=='xlsx'){
			placeholderurl = xlsicon;
		}
		else if(event.target.files[i].name.split('.').pop()=='zip' || event.target.files[i].name.split('.').pop()=='tar'){
			placeholderurl = zipicon;
		}
		else if(event.target.files[i].name.split('.').pop()=='svg'){
			placeholderurl = svgicon;
		}
		else if(event.target.files[i].name.split('.').pop()=='txt'){
			placeholderurl = txticon;
		}
		else if(event.target.files[i].name.split('.').pop()=='ppt'||event.target.files[i].name.split('.').pop()=='pptx'){	
			placeholderurl = ppticon;
		}
		else if(event.target.files[i].name.split('.').pop()=='xml'){
			placeholderurl = xmlicon;
		}

		else{
			placeholderurl = docicon;
		}

		
	document.getElementById('file-list').innerHTML+=`	<div class="rounded-lg p-3 pb-4 pl-5 relative overflow-hidden" style="background-color: rgb(175, 235, 212);"><div class="absolute w-1.5 top-0 bottom-0 left-0" style="background-color: rgb(20, 135, 109);">
	</div>
	<img src="`+ placeholderurl+ `" class="rounded-sm h-8 w-8" alt="" />

	<div class="flex justify-between items-center">
		<div class="font-medium text-sm" style="color: rgb(6, 40, 35);">`+event.target.files[i].name+`</div>
		<div class="w-6 h-6 rounded-lg flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4" style="color: rgb(17, 95, 80);"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
			</svg>
			</div>
			</div>
			<div class="text-xs font-medium" style="color: rgb(14, 70, 60);">
				`+filesize+`
			</div>
			</div>`;
	}	
	console.log('cachedt2:',cachedt.files);
	var dt = new DataTransfer();
	for (let i = 0; i < event.target.files.length; i++) {
		dt.items.add(event.target.files[i]);
	}
	for (let i = 0; i < cachedt.files.length; i++) {
		dt.items.add(cachedt.files[i]);
	}
	cachedt = new DataTransfer();
	cachedtarray = [];
	document.getElementById('dropzone-file').files = dt.files;
	

		
}


function drophandler(event){
	event.preventDefault();
	console.log(event.dataTransfer.files[0]);
	console.log('dropped file size:',(event.dataTransfer.files[0].size/1024/1024).toPrecision(3),'MB');
	if(event.dataTransfer.files[0].size/1024/1024/1024>1){
		document.getElementById('file-size').innerText = (event.dataTransfer.files[0].size/1024/1024/1024).toPrecision(2)+'GB';
		console.log('file size is greater than 1GB');
	}else if(event.dataTransfer.files[0].size/1024/1024>1)
	{
		document.getElementById('file-size').innerText = (event.dataTransfer.files[0].size/1024/1024).toPrecision(2)+'MB';
		console.log('file size is greater than 1MB');
	}
	else if(event.dataTransfer.files[0].size/1024>0.5){
		document.getElementById('file-size').innerText = (event.dataTransfer.files[0].size/1024).toPrecision(3)+'kB';
			console.log('file size is greater than 1kB');
		}
	
	else{
		document.getElementById('file-size').innerText = event.dataTransfer.files[0].size+'B';
		console.log('file size is less than 1kB');
	}
	for(var i=0;i<event.dataTransfer.files.length;i++){
		var filesize="0B";
		var file=event.dataTransfer.files[i];
		if(file.size/1024/1024/1024>1){
			filesize = (file.size/1024/1024/1024).toPrecision(2)+'GB';
		}else if(file.size/1024/1024>1)
		{
			filesize = (file.size/1024/1024).toPrecision(2)+'MB';
		}
		else if(file.size/1024>0.5){
			filesize = (event.dataTransfer.files[0].size/1024).toPrecision(3)+'kB';	
			}
		else{
			filesize = event.dataTransfer.files[0].size+'B';
		}
		var placeholderurl = '';
		if(event.dataTransfer.files[i].name.split('.').pop()=='jpg'||event.dataTransfer.files[0].name.split('.').pop()=='png'||event.dataTransfer.files[0].name.split('.').pop()=='gif'){
			placeholderurl = imageicon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='mp4'||event.dataTransfer.files[0].name.split('.').pop()=='mp3'){
			placeholderurl = videoicon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='pdf'){
			placeholderurl = pdficon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='doc'||event.dataTransfer.files[0].name.split('.').pop()=='docx'){
			placeholderurl = wordicon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='xls'||event.dataTransfer.files[0].name.split('.').pop()=='xlsx'){
			placeholderurl = xlsicon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='zip' || event.dataTransfer.files[0].name.split('.').pop()=='tar'){
			placeholderurl = zipicon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='svg'){
			placeholderurl = svgicon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='txt'){
			placeholderurl = txticon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='ppt'||event.dataTransfer.files[0].name.split('.').pop()=='pptx'){	
			placeholderurl = ppticon;
		}
		else if(event.dataTransfer.files[i].name.split('.').pop()=='xml'){
			placeholderurl = xmlicon;
		}

		else{
			placeholderurl = docicon;
		}



	document.getElementById('file-list').innerHTML+=`	<div class="rounded-lg p-3 pb-4 pl-5 relative overflow-hidden" style="background-color: rgb(175, 235, 212);"><div class="absolute w-1.5 top-0 bottom-0 left-0" style="background-color: rgb(20, 135, 109);">
	</div>
	<img src="`+placeholderurl+`" class="rounded-sm h-8 w-8" alt="" />

	<div class="flex justify-between items-center">
		<div class="font-medium text-sm" style="color: rgb(6, 40, 35);">`+event.dataTransfer.files[i].name+`</div>
		<div class="w-6 h-6 rounded-lg flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4" style="color: rgb(17, 95, 80);"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
			</svg>
			</div>
			</div>
			<div class="text-xs font-medium" style="color: rgb(14, 70, 60);">
				`+filesize+`
			</div>
			</div>`;
	}
	// Set dropped files to the input field
	//document.getElementById('dropzone-file').files =	FileList.apply(document.getElementById('dropzone-file').files).concat(Array.from());					
	var dt = event.dataTransfer;
	//for (let i = 0; i < document.getElementById('dropzone-file').files.length; i++) {
		//document.getElementById('dropzone-file').files.push(dt.files[i]);
	//		console.log('dt:',dt.files)
	//}
	var dt2 = new DataTransfer();
	
	for (let i = 0; i < dt.files.length; i++) {
		dt2.items.add(dt.files[i]);
	}
	for (let i = 0; i < document.getElementById('dropzone-file').files.length; i++) {
		dt2.items.add(document.getElementById('dropzone-file').files[i]);
			console.log('dt2:',dt.files)
	}
	document.getElementById('dropzone-file').files = dt2.files;
	



}

function dragOverHandler(event){
	event.preventDefault();
	console.log('dragging over');
}
function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}