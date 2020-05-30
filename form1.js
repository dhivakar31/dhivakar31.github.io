var ptchoose,atchoose;
var vidmcq,vidfill;
var vidc,vidcp,vidj,vidpy;
function testchoose()
{
ptchoose=document.getElementById("check1");
atchoose=document.getElementById("check2");
vidc=document.getElementById("learnc");
vidcp=document.getElementById("learncp");
vidj=document.getElementById("learnj");
vidpy=document.getElementById("learnpy");

vidmcq=document.getElementById("learnm");
vidfill=document.getElementById("learnf");
if(ptchoose.checked==true)
{
  ptchoose=1;
}
else
{
  ptchoose=0;
}

if(atchoose.checked==true)
{
  atchoose=1;
}
else
{
  atchoose=0;
}
if(vidc.checked==true)
{
  vidc=1;
}
else
{
  vidc=0;
}
if(vidcp.checked==true)
{
  vidcp=1;
}
else
{
  vidcp=0;
}
if(vidj.checked==true)
{
  vidj=1;
}
else
{
  vidj=0;
}
if(vidpy.checked==true)
{
  vidpy=1;
}
else
{
  vidpy=0;
}

if(vidmcq.checked==true)
{
  vidmcq=1;
}
else
{
  vidmcq=0;
}
if(vidfill.checked==true)
{
  vidfill=1;
}
else
{
  vidfill=0;
}
if(ptchoose==1)
{
  
  $(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("ptform.html");
  });
}
else if(atchoose==1)
{
  $(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("atform.html");
   
  });

}
else
{

  $(document).ready(function(){
    $("#con1").empty();
   
    $("#con1").load("formresult.html");
   
  });
}
}
var ptmcq,ptfill,ptpro;
function ptchoosefun()
{
  
ptmcq=document.getElementById("ptformm");
ptfill=document.getElementById("ptformf");
ptpro=document.getElementById("ptformp");

if(ptmcq.checked==true)
{
  ptmcq=1;
}
else{
  ptmcq=0;
}

if(ptfill.checked==true)
{
  ptfill=1;
}
else{
  ptfill=0;
}
if(ptpro.checked==true)
{
  ptpro=1;
}
else{
  ptpro=0;
}
if(ptmcq==1)
{
  
  $(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("ptmcqform.html");
   
  });
}
else if(ptfill==1)
{
$(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("ptfillform.html");
   
  });
}
else if(ptpro==1)
{
$(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("ptproform.html");
   
  });
}
else{
  if(atchoose==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("atform.html");
     
    });
  }
  else{
    $(document).ready(function(){
      $("#con1").empty();
     
      $("#con1").load("formresult.html");
     
    });
  }
}
}
var atmcq,atfill,atpro;
function atchoosefun()
{
atmcq=document.getElementById("atformm");
atfill=document.getElementById("atformf");
atpro=document.getElementById("atformp");
if(atmcq.checked==true)
{
  atmcq=1;
}
else{
  atmcq=0;
}
if(atfill.checked==true)
{
  atfill=1;
}
else{
  atfill=0;
}
if(atpro.checked==true)
{
  atpro=1;
}
else{
  atpro=0;
}
if(atmcq==1)
{
  
  $(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("atmcqform.html");
   
  });
}
else if(atfill==1)
{
$(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("atfillform.html");
   
  });
}
else if(atpro==1){
  $(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("atproform.html");
   
  });
}
else
{
  $(document).ready(function(){
    $("#con1").empty();
   
    $("#con1").load("formresult.html");
   
  });
}

}

var pteasymcqtotal=0,pteasymcqcorrect=0,pteasymcqchange=0;
var ptmedmcqtotal=0,ptmedmcqcorrect=0,ptmedmcqchange=0;
var pthardmcqtotal=0,pthardmcqcorrect=0,pthardmcqchange=0;
var pteasyresm=0,ptmedresm=0,pthardresm=0;
var ptmcqres,ptmcqres1;
var ptmcqmax,ptmcqmax1;
function ptmcqnext()
{
pteasymcqtotal=document.getElementById("easytotalmcqpt").value;
pteasymcqcorrect=document.getElementById("easycorrectmcqpt").value;
pteasymcqchange=document.getElementById("easychangemcqpt").value;
ptmedmcqtotal=document.getElementById("medtotalmcqpt").value;
ptmedmcqcorrect=document.getElementById("medcorrectmcqpt").value;
ptmedmcqchange=document.getElementById("medchangemcqpt").value;
pthardmcqtotal=document.getElementById("hardtotalmcqpt").value;
pthardmcqcorrect=document.getElementById("hardcorrectmcqpt").value;
pthardmcqchange=document.getElementById("hardchangemcqpt").value;
pteasymcqcorrect=pteasymcqcorrect*1;
ptmedmcqcorrect=ptmedmcqcorrect*5;
pthardmcqcorrect=pthardmcqcorrect*10;
ptmcqmax=(pteasymcqtotal*1)+(ptmedmcqtotal*5)+(pthardmcqtotal*10);
pteasyresm=pteasymcqcorrect-(pteasymcqchange*0.5);
ptmedresm=ptmedmcqcorrect-(ptmedmcqchange*0.5);
pthardresm=pthardmcqcorrect-(pthardmcqchange*0.5);
if(pteasyresm<0 || isNaN(pteasyresm))
{
pteasyresm=0;
}
if(ptmedresm<0 || isNaN(ptmedresm))
{
ptmedresm=0;
}
if(pthardresm<0 || isNaN(pthardresm))
{
pthardresm=0;
}
ptmcqres=pteasyresm+ptmedresm+pthardresm;

if(ptmcqres<0 || isNaN(ptmcqres))
{
ptmcqres=0;
}

  if(ptfill==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("ptfillform.html");
     
    });
  }
  else if(ptpro==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("ptproform.html");
     
    });
  }
  else{
    
    if(atchoose==1)
    {
    
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("atform.html");
     
    });
  }
  else
  {
   
  $(document).ready(function(){
    $("#con1").empty();
   
    $("#con1").load("formresult.html");
   
  }); 
  }
  }
  ptmcqres1=ptmcqres;
  ptmcqmax1=ptmcqmax;

}


var pteasyfilltotal=0,pteasyfillcorrect=0,pteasyfillchange=0;
var ptmedfilltotal=0,ptmedfillcorrect=0,ptmedfillchange=0;
var pthardfilltotal=0,pthardfillcorrect=0,pthardfillchange=0;
var pteasyresf=0,ptmedresf=0,pthardresf=0;
var ptfillres,ptfillres1;
var ptfillmax,ptfillmax1;
function ptfillnext()
{
pteasyfilltotal=document.getElementById("easytotalfillpt").value;
pteasyfillcorrect=document.getElementById("easycorrectfillpt").value;
pteasyfillchange=document.getElementById("easychangefillpt").value;
ptmedfilltotal=document.getElementById("medtotalfillpt").value;
ptmedfillcorrect=document.getElementById("medcorrectfillpt").value;
ptmedfillchange=document.getElementById("medchangefillpt").value;
pthardfilltotal=document.getElementById("hardtotalfillpt").value;
pthardfillcorrect=document.getElementById("hardcorrectfillpt").value;
pthardfillchange=document.getElementById("hardchangefillpt").value;
pteasyfillcorrect=pteasyfillcorrect*5;
ptmedfillcorrect=ptmedfillcorrect*10;
pthardfillcorrect=pthardfillcorrect*15;
ptfillmax=(pteasyfilltotal*5)+(ptmedfilltotal*10)+(pthardfilltotal*15);
pteasyresf=pteasyfillcorrect-(pteasyfillchange*0.5);
ptmedresf=ptmedfillcorrect-(ptmedfillchange*0.5);
pthardresf=pthardfillcorrect-(pthardfillchange*0.5);
if(pteasyresf<0 || isNaN(pteasyresf))
{
pteasyresf=0;
}
if(ptmedresf<0 || isNaN(ptmedresf))
{
ptmedresf=0;
}
if(pthardresf<0 || isNaN(pthardresf))
{
pthardresf=0;
}
ptfillres=pteasyresf+ptmedresf+pthardresf;
if(ptfillres<0 || isNaN(ptfillres))
{
  ptfillres=0;
}
if(ptpro==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("ptproform.html");
     
    });
  }
  else{
    if(atchoose==1)
{
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("atform.html");
     
    });
  }
  else{
    
  $(document).ready(function(){
    $("#con1").empty();
   
    $("#con1").load("formresult.html");
   
  });
  }
}
ptfillres1=ptfillres;
ptfillmax1=ptfillmax;
}


var ateasymcqtotal=0,ateasymcqcorrect=0,ateasymcqchange=0;
var atmedmcqtotal=0,atmedmcqcorrect=0,atmedmcqchange=0;
var athardmcqtotal=0,athardmcqcorrect=0,athardmcqchange=0;
var ateasyresm=0,atmedresm=0,athardresm=0;
var atmcqres,atmcqres1;
var atmcqmax,atmcqmax1;
function atmcqnext()
{
ateasymcqtotal=document.getElementById("easytotalmcqat").value;
ateasymcqcorrect=document.getElementById("easycorrectmcqat").value;
ateasymcqchange=document.getElementById("easychangemcqat").value;
atmedmcqtotal=document.getElementById("medtotalmcqat").value;
atmedmcqcorrect=document.getElementById("medcorrectmcqat").value;
atmedmcqchange=document.getElementById("medchangemcqat").value;
athardmcqtotal=document.getElementById("hardtotalmcqat").value;
athardmcqcorrect=document.getElementById("hardcorrectmcqat").value;
athardmcqchange=document.getElementById("hardchangemcqat").value;
ateasymcqcorrect=ateasymcqcorrect*1;
atmedmcqcorrect=atmedmcqcorrect*5;
athardmcqcorrect=athardmcqcorrect*10;
atmcqmax=(ateasymcqtotal*1)+(atmedmcqtotal*5)+(athardmcqtotal*10);
ateasyresm=ateasymcqcorrect-(ateasymcqchange*0.5);
atmedresm=atmedmcqcorrect-(atmedmcqchange*0.5);
athardresm=athardmcqcorrect-(athardmcqchange*0.5);
if(ateasyresm<0 || isNaN(ateasyresm))
{
ateasyresm=0;
}
if(atmedresm<0 || isNaN(atmedresm))
{
atmedresm=0;
}
if(athardresm<0 || isNaN(athardresm))
{
athardresm=0;
}
atmcqres=ateasyresm+atmedresm+athardresm;
if(atmcqres<0 || isNaN(atmcqres))
{
  atmcqres=0;
}
  if(atfill==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("atfillform.html");
     
    });
  }
  else if(atpro==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("atproform.html");
     
    });
  }
  else{

    $(document).ready(function(){
      $("#con1").empty();
     
      $("#con1").load("formresult.html");
     
    });
  }
  atmcqres1=atmcqres;
  atmcqmax1=atmcqmax;
}

var ateasyfilltotal=0,ateasyfillcorrect=0,ateasyfillchange=0;
var atmedfilltotal=0,atmedfillcorrect=0,atmedfillchange=0;
var athardfilltotal=0,athardfillcorrect=0,athardfillchange=0;
var ateasyresf=0,atmedresf=0,athardresf=0;
var atfillres,atfillres1;
var atfillmax,atfillmax1;
function atfillnext()
{
ateasyfilltotal=document.getElementById("easytotalfillat").value;
ateasyfillcorrect=document.getElementById("easycorrectfillat").value;
ateasyfillchange=document.getElementById("easychangefillat").value;
atmedfilltotal=document.getElementById("medtotalfillat").value;
atmedfillcorrect=document.getElementById("medcorrectfillat").value;
atmedfillchange=document.getElementById("medchangefillat").value;
athardfilltotal=document.getElementById("hardtotalfillat").value;
athardfillcorrect=document.getElementById("hardcorrectfillat").value;
athardfillchange=document.getElementById("hardchangefillat").value;
ateasyfillcorrect=ateasyfillcorrect*5;
atmedfillcorrect=atmedfillcorrect*10;
athardfillcorrect=athardfillcorrect*15;
atfillmax=(ateasyfilltotal*5)+(atmedfilltotal*10)+(athardfilltotal*15);
ateasyresf=ateasyfillcorrect-(ateasyfillchange*0.5);
atmedresf=atmedfillcorrect-(atmedfillchange*0.5);
athardresf=athardfillcorrect-(athardfillchange*0.5);
if(ateasyresf<0 || isNaN(ateasyresf))
{
ateasyresf=0;
}
if(atmedresf<0 || isNaN(atmedresf))
{
atmedresf=0;
}
if(athardresf<0 || isNaN(athardresf))
{
athardresf=0;
}
atfillres=ateasyresf+atmedresf+athardresf;
if(atfillres<0 || isNaN(atfillres))
{
  atfillres=0;
}
if(atpro==1)
  {
    $(document).ready(function(){
      $("#con1").empty();
      $("#back").empty();
   
      $("#con1").load("atproform.html");
     
    });
  }
  else{

    $(document).ready(function(){
      $("#con1").empty();
     
      $("#con1").load("formresult.html");
     
    });
  }
  atfillmax1=atfillmax;
  atfillres1=atfillres;
}

var pteasyprototal=0,pteasyprocorrect=0,pteasyprochange=0;
var ptmedprototal=0,ptmedprocorrect=0,ptmedprochange=0;
var pthardprototal=0,pthardprocorrect=0,pthardprochange=0;
var pteasyresp=0,ptmedresp=0,pthardresp=0;
var ptprores,ptprores1;
var ptpromax,ptpromax1;
var pteasylang,ptmedlang,pthardlang;
var ptc=0,ptcp=0,ptj=0,ptpy=0;
var ptc1,ptcp1,ptj1,ptpy1;
function ptpronext()
{
pteasyprototal=document.getElementById("easytotalpropt").value;
pteasyprocorrect=document.getElementById("easycorrectpropt").value;
pteasyprochange=document.getElementById("easychangepropt").value;
ptmedprototal=document.getElementById("medtotalpropt").value;
ptmedprocorrect=document.getElementById("medcorrectpropt").value;
ptmedprochange=document.getElementById("medchangepropt").value;
pthardprototal=document.getElementById("hardtotalpropt").value;
pthardprocorrect=document.getElementById("hardcorrectpropt").value;
pthardprochange=document.getElementById("hardchangepropt").value;
pteasylang=document.getElementById("easylangpropt").value;
ptmedlang=document.getElementById("medlangpropt").value;
pthardlang=document.getElementById("hardlangpropt").value;
pteasyprocorrect=pteasyprocorrect*10;
ptmedprocorrect=ptmedprocorrect*20;
pthardprocorrect=pthardprocorrect*30;
ptpromax=(pteasyprototal*10)+(ptmedprototal*20)+(pthardprototal*30);
pteasyresp=pteasyprocorrect-(pteasyprochange*0.25);
ptmedresp=ptmedprocorrect-(ptmedprochange*0.25);
pthardresp=pthardprocorrect-(pthardprochange*0.25);

if(pteasyresp<0 || isNaN(pteasyresp))
{
pteasyresp=0;
}
if(ptmedresp<0 || isNaN(ptmedresp))
{
ptmedresp=0;
}
if(pthardresp<0 || isNaN(pthardresp))
{
pthardresp=0;
}
ptprores=pteasyresp+ptmedresp+pthardresp;
if(ptprores<0 || isNaN(ptprores))
{
  ptprores=0;
}
if(pteasylang=='c' || pteasylang=='C')
{
ptc=ptc+1;
}
if(pteasylang=="c++" || pteasylang=="C++")
{
ptcp=ptcp+1;
}
if(ateasylang=="java" || ateasylang=="JAVA" || ateasylang=="Java")
{
ptj=ptj+1;
}
if(pteasylang=="python" || pteasylang=="PYTHON" || pteasylang=="Python")
{
ptpy=ptpy+1;
}
if(ptmedlang=='c' || ptmedlang=='C')
{
ptc=ptc+2;
}
if(ptmedlang=="c++" || ptmedlang=="C++")
{
ptcp=ptcp+2;
}
if(ptmedlang=="java" || ptmedlang=="JAVA" || ptmedlang=="Java")
{
ptj=ptj+2;
}
if(ptmedlang=="python" || ptmedlang=="PYTHON" || ptmedlang=="Python")
{
ptpy=ptpy+2;
}
if(pthardlang=='c' || pthardlang=='C')
{
ptc=ptc+3;
}
if(pthardlang=="c++" || pthardlang=="C++")
{
ptcp=ptcp+3;
}
if(pthardlang=="java" || pthardlang=="JAVA" || pthardlang=="Java")
{
ptj=ptj+3;
}
if(pthardlang=="python" || pthardlang=="PYTHON" || pthardlang=="Python")
{
ptpy=ptpy+3;
}
if(atchoose==1)
{
  $(document).ready(function(){
    $("#con1").empty();
    $("#back").empty();
   
    $("#con1").load("atform.html");
   
  });
}
else{
  $(document).ready(function(){
    $("#con1").empty();
   
    $("#con1").load("formresult.html");
   
  });
}
ptc1=ptc;
ptcp1=ptcp;
ptj1=ptj;
ptpy1=ptpy;
ptpromax1=ptpromax;
ptprores1=ptprores;
}

var ateasyprototal=0,ateasyprocorrect=0,ateasyprochange=0;
var atmedprototal=0,atmedprocorrect=0,atmedprochange=0;
var athardprototal=0,athardprocorrect=0,athardprochange=0;
var ateasyresp=0,atmedresp=0,athardresp=0;
var atprores,atprores1;
var atpromax,atpromax1;
var ateasylang,atmedlang,athardlang;
var atc=0,atcp=0,atj=0,atpy=0;
var atc1,atcp1,atj1,atpy1;
function atpronext()
{
ateasyprototal=document.getElementById("easytotalproat").value;
ateasyprocorrect=document.getElementById("easycorrectproat").value;
ateasyprochange=document.getElementById("easychangeproat").value;
atmedprototal=document.getElementById("medtotalproat").value;
atmedprocorrect=document.getElementById("medcorrectproat").value;
atmedprochange=document.getElementById("medchangeproat").value;
athardprototal=document.getElementById("hardtotalproat").value;
athardprocorrect=document.getElementById("hardcorrectproat").value;
athardprochange=document.getElementById("hardchangeproat").value;
ateasylang=document.getElementById("easylangproat").value;
atmedlang=document.getElementById("medlangproat").value;
athardlang=document.getElementById("hardlangproat").value;
ateasyprocorrect=ateasyprocorrect*10;
atmedprocorrect=atmedprocorrect*20;
athardprocorrect=athardprocorrect*30;

atpromax=(ateasyprototal*10)+(atmedprototal*20)+(athardprototal*30);
ateasyresp=ateasyprocorrect-(ateasyprochange*0.25);
atmedresp=atmedprocorrect-(atmedprochange*0.25);
athardresp=athardprocorrect-(athardprochange*0.25);

if(ateasyresp<0 || isNaN(ateasyresp))
{
ateasyresp=0;
}
if(atmedresp<0 || isNaN(atmedresp))
{
atmedresp=0;
}
if(athardresp<0 || isNaN(athardresp))
{
athardresp=0;
}
atprores=ateasyresp+atmedresp+athardresp;

if(atprores<0 || isNaN(atprores))
{
  atprores=0;
}
if(ateasylang=='c' || ateasylang=='C')
{
atc=atc+1;
}
if(ateasylang=="c++" || ateasylang=="C++")
{
atcp=atcp+1;
}
if(ateasylang=="java" || ateasylang=="JAVA" || ateasylang=="Java")
{
atj=atj+1;
}
if(ateasylang=="python" || ateasylang=="PYTHON" || ateasylang=="Python")
{
atpy=atpy+1;
}
if(atmedlang=='c' || atmedlang=='C')
{
atc=atc+2;
}
if(atmedlang=="c++" || atmedlang=="C++")
{
atcp=atcp+2;
}
if(atmedlang=="java" || atmedlang=="JAVA" || atmedlang=="Java")
{
atj=atj+2;
}
if(atmedlang=="python" || atmedlang=="PYTHON" || atmedlang=="Python")
{
atpy=atpy+2;
}
if(athardlang=='c' || athardlang=='C')
{
atc=atc+3;
}
if(athardlang=="c++" || athardlang=="C++")
{
atcp=atcp+3;
}
if(athardlang=="java" || athardlang=="JAVA" || athardlang=="Java")
{
atj=atj+3;
}
if(athardlang=="python" || athardlang=="PYTHON" || athardlang=="Python")
{
atpy=atpy+3;
}
$(document).ready(function(){
  $("#con1").empty();
 
  $("#con1").load("formresult.html");
 
});
atc1=atc;
atcp1=atcp;
atj1=atj;
atpy1=atpy;
atpromax1=atpromax;
atprores1=atprores;
}
var mcqfinal=0,fillfinal=0,profinal=0;
var langc=0,langcp=0,langjava=0,langpy=0;
var timetest,overall=0,delay=0;
function result()
{
  if(overall==0)
  {
timetest=document.getElementById("testtime").value;
if(timetest>180)
{
delay=delay+1;
timetest=timetest-180;
}
if(isNaN(ptmcqres1))
{
  ptmcqres1=0;
}

if(isNaN(ptmcqmax1))
{
  ptmcqmax1=1;
}

if(isNaN(atmcqres1))
{
  atmcqres1=0;
}

if(isNaN(atmcqmax1))
{
  atmcqmax1=1;
}
if(isNaN(ptfillres1))
{
  ptfillres1=0;
}

if(isNaN(ptfillmax1))
{
  ptfillmax1=1;
}

if(isNaN(atfillres1))
{
  atfillres1=0;
}

if(isNaN(atfillmax1))
{
  atfillmax1=1;
}

if(isNaN(ptprores1))
{
  ptprores1=0;
}

if(isNaN(ptpromax1))
{
  ptpromax1=1;
}

if(isNaN(atprores1))
{
  atprores1=0;
}

if(isNaN(atpromax1))
{
  atpromax1=1;
}
if(isNaN(ptc1))
{
  ptc1=0;
}

if(isNaN(ptcp1))
{
  ptcp1=0;
}

if(isNaN(ptj1))
{
  ptj1=0;
}

if(isNaN(ptpy1))
{
  ptpy1=0;
}

if(isNaN(atc1))
{
  atc1=0;
}

if(isNaN(atcp1))
{
  atcp1=0;
}

if(isNaN(atj1))
{
  atj1=0;
}

if(isNaN(atpy1))
{
  atpy1=0;
}
if(vidmcq==1)
{
mcqfinal=mcqfinal+1;
}
if(ptmcq==1)
{
  mcqfinal=mcqfinal+(1*(ptmcqres1/ptmcqmax1));
}

mcqfinal=mcqfinal+(1*(atmcqres1/atmcqmax1));

if(mcqfinal<0 || isNaN(mcqfinal))
{
  mcqfinal=0;
}
if(vidfill==1)
{
fillfinal=fillfinal+1;
}
if(ptfill==1)
{
  fillfinal=fillfinal+(1*(ptfillres1/ptfillmax1));
}
fillfinal=fillfinal+(1*(atfillres1/atfillmax1));
if(fillfinal<0 || isNaN(fillfinal))
{
  fillfinal=0;
}
if(vidc==1 || vidcp==1 || vidj ==1 || vidpy==1)
{
profinal=profinal+1;
}
if(ptpro==1)
{
  profinal=profinal+(1*(ptprores1/ptpromax1));
}
profinal=profinal+(2*(atprores1/atpromax1));
if(profinal<0 || isNaN(profinal))
{
  profinal=0;
}
langc=vidc+ptc1+atc1;
langcp=vidcp+ptcp1+atcp1;
langjava=vidj+ptj1+atj1;
langpy=vidpy+ptpy1+atpy1;
overall=(mcqfinal+fillfinal+profinal)-(delay*0.125);
if(overall<0 || isNaN(overall))
{
  overall=0;
}

$(document).ready(function(){
  $("#show").empty();
  $("#show").append("<h4 >MCQ Skill Rating:</h4>");
  $("#show").append("<h6 >The rating is "+ mcqfinal+" out of 3.</h6><br>");
  $("#show").append("<h4 >Fill-up Skill Rating</h4>");
  $("#show").append("<h6 >The rating is "+ fillfinal+" out of 3.</h6><br>");
  $("#show").append("<h4 >Programming Skill Rating:</h4>");
  $("#show").append("<h6 >The rating is "+ profinal+" out of 4.</h6><h6 >Rating in C language is " +langc +" out of 13.</h6><h6 >Rating in C++ language is " +langcp +" out of 13.</h6><h6 >Rating in java language is " +langjava +" out of 13.</h6><h6 >Rating in python language is " +langpy +" out of 13.</h6><br>");
  $("#show").append("<h4 >Overall Student Skill Rating:</h4>");
  $("#show").append("<h6 >The rating is "+ overall+" out of 10.</h6><br>");
});
}}
function formpage()
{
  
$(document).ready(function(){
  $("#con1").empty();
  $("#back").empty();
  $("#con1").load("form.html");
 
});
}