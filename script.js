 const input=document.querySelector("input");
 let img=document.createElement("img");
 let block=document.querySelector(".main-img");
 const button=document.querySelector("button");
 const user=document.querySelector(".gituser")
 const username=document.querySelector(".username");
 const date=document.querySelector(".joineddate");
 const bio=document.querySelector(".bio");
 const following=document.querySelector(".followingtotal");
 const followers=document.querySelector(".followerstotal");
 const repos=document.querySelector(".repostotal");

 const twitter=document.querySelector(".twit p");
 const locations=document.querySelector(".locations p");
 const company=document.querySelector(".company p");
 const website=document.querySelector(".blog p");


 //eventlisteners
 button.addEventListener("click", function(){
      const url=`https://api.github.com/users/${input.value}`
      async function getUrl() {
         const response= await fetch(url);
         const data= await response.json();

         img.src=data.avatar_url;
         img.style.height="117px";
         img.style.width="117px";
         img.style.borderRadius="50%";
         block.appendChild(img);
         block.style.border="none";
         
         const dataDate=data.created_at.slice(0,data.created_at.length-10);

         user.innerHTML=data.name;
         username.innerHTML=`@${data.login}`;
         date.innerHTML=`Joined ${dataDate}`;
         repos.innerHTML=data.public_repos;
         followers.innerHTML=data.followers;
         following.innerHTML=data.following;

         locations.innerHTML=data.location==="" || data.location===null
         ?"No location"
         :data.location;

         twitter.innerHTML=data.twitter_username==="" || data.twitter_username===null
         ?"No twitter"
         :data.twitter_username;

         company.innerHTML=data.company==="" || data.company===null
         ?"No info"
         :data.company;

         website.innerHTML=data.blog==="" || data.blog===null
         ?"No site"
         :data.blog;

         bio.innerHTML=data.bio==="" || data.bio===null
         ?"This user has no Bio"
         :data.bio;
     }
     getUrl();

     input.value="";
     
 });