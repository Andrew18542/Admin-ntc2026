
  announcements:[
  {title:"Welcome to AAS-02-2026",text:"Welcome to our student learning portal. Check this page regularly for updates."},
  {title:"Study Materials",text:"New notes and learning materials can be added from the Admin Area."}
 ],
 notes:[
  {title:"Managing the Boss",subject:"Administrative Studies",text:"Notes and competency preparation for the Managing the Boss topic."},
  {title:"Petty Cash",subject:"Administrative Studies",text:"Study material on managing and recording petty cash transactions."}
 ],
 assignments:[
  {title:"Administrative Studies Exercise",due:"2026-08-20",text:"Complete the questions provided by your instructor."}
 ],
 timetable:[
  {day:"Monday",subject:"Administrative Studies",time:"08:00–10:00",room:"Classroom"},
  {day:"Tuesday",subject:"Business Studies",time:"08:00–10:00",room:"Classroom"},
  {day:"Wednesday",subject:"Computer Studies",time:"08:00–10:00",room:"Computer Lab"}
 ]
};

function load(key){return JSON.parse(localStorage.getItem("aas_"+key)||"null")||defaults[key]}
function save(key,data){localStorage.setItem("aas_"+key,JSON.stringify(data))}

function render(){
 const announcements=load("announcements"), notes=load("notes"), assignments=load("assignments"), timetable=load("timetable");
 document.getElementById("announcementList").innerHTML=announcements.map(x=>`<article class="card"><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></article>`).join("");
 document.getElementById("notesList").innerHTML=notes.map(x=>`<article class="card"><h3>${esc(x.title)}</h3><small>${esc(x.subject)}</small><p>${esc(x.text)}</p></article>`).join("");
 document.getElementById("assignmentList").innerHTML=assignments.map(x=>`<article class="card"><h3>${esc(x.title)}</h3><p><strong>Due:</strong> ${esc(x.due)}</p><p>${esc(x.text)}</p></article>`).join("");
 document.getElementById("timetableBody").innerHTML=timetable.map(x=>`<tr><td>${esc(x.day)}</td><td>${esc(x.subject)}</td><td>${esc(x.time)}</td><td>${esc(x.room)}</td></tr>`).join("");
}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

document.getElementById("announcementForm").addEventListener("submit",e=>{
 e.preventDefault(); const a=load("announcements"); a.unshift({title:announcementTitle.value,text:announcementText.value}); save("announcements",a); e.target.reset(); render();
});
document.getElementById("noteForm").addEventListener("submit",e=>{
 e.preventDefault(); const a=load("notes"); a.unshift({title:noteTitle.value,subject:noteSubject.value,text:noteText.value}); save("notes",a); e.target.reset(); render();
});
document.getElementById("assignmentForm").addEventListener("submit",e=>{
 e.preventDefault(); const a=load("assignments"); a.unshift({title:assignmentTitle.value,due:assignmentDue.value,text:assignmentText.value}); save("assignments",a); e.target.reset(); render();
});
render();
