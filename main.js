function at1()
{

  $(document).ready(function(){
      $("#at2").css("display","none");
    $("#at3").css("display","none");
    $("#at1").css("display","block");
  });
}
function mcqpt1()
{
  $(document).ready(function(){
    $("#cont1").load("mcqpt.html")

   });
}
function medi()
{
 $(document).ready(function(){
    $("#cont1").load("med.html");

   });
}
function at2()
{

  $(document).ready(function(){
    $("#at1").css("display","none");
    $("#at3").css("display","none");
    $("#at2").css("display","block");
  });
}
function at3()
{
  
  $(document).ready(function(){
    $("#at2").css("display","none");
    $("#at1").css("display","none");
    $("#at3").css("display","block");
  });
}
var cbcount=0,cbcount1=0,cbcount2=0;
var val,val1,val2;
var letterNumber = /^[a-zA-Z]+$/;
function cb1()
{
  val=document.getElementById("ex1").value;
  
}
function cb2()
{
  val=document.getElementById("ex2").value;
  
}
function cb3()
{
  val=document.getElementById("ex3").value;
 
}
var res,aftercount,aftercount1,aftercount2;
function cbcou1()
{
  cbcount=cbcount+1;
  if(val=='a')
  {
    res="correct answer";
  }
  else{
    res="wrong answer"
  }

  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+res+" with "+cbcount+" attempts"+"</p>")
  });
 
aftercount=cbcount;
}




function cbm1()
{
  val1=document.getElementById("exm1").value;
  
}
function cbm2()
{
  val1=document.getElementById("exm2").value;
  
}
function cbm3()
{
  val1=document.getElementById("exm3").value;
 
}
var res1;
function cbcoum1()
{
  cbcount1=cbcount1+1;
  if(val1=='c')
  {
    res1="correct answer";
  }
  else{
    res1="wrong answer"
  }

  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+res1+" with "+cbcount1+" attempts"+"</p>")
  });
  aftercount1=cbcount1;
}
function mcqpthard()
{
  $(document).ready(function(){
    $("#cont1").load("mcqpthar.html");

   });
}

function cbh1()
{
  val2=document.getElementById("exh1").value;
  
}
function cbh2()
{
  val2=document.getElementById("exh2").value;
  
}
function cbh3()
{
  val2=document.getElementById("exh3").value;
 
}
var res2;
function cbcouh1()
{
  cbcount2=cbcount2+1;
  if(val2=='b')
  {
    res2="correct answer";
  }
  else{
    res2="wrong answer"
  }

  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+res2+" with "+cbcount2+" attempts"+"</p>")
  });
  aftercount2=cbcount2;
}
function fillpt1()
{
  $(document).ready(function(){
    $("#cont1").load("filluppt1.html")

   });
}
function fillupmed()
{
  $(document).ready(function(){
    $("#cont1").load("filluppt2.html")

   });
}
var fcount1=0,fcount2=0,fcount3=0;
var fval1,fval2,fval3;
var fres;
var afterfcount1,afterfcount2,afterfcount3;
function cbcouf1()
{
  fval1=document.getElementById("exf1").value;
  fcount1=fcount1+1;
  var b="dir";
  
  if(fval1==b)
  {
    fres="correct answer";

  }
  else{
    fres="wrong answer";
     }
  
  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+fres+" with "+fcount1+" attempts"+"</p>");
  });
  afterfcount1=fcount1;
}
function filluphard()
{
  $(document).ready(function(){
    $("#cont1").load("filluppt3.html")

   });

}
var fres1,fres2;
function cbcouf2()
{
  fval2=document.getElementById("exf2").value;
  fcount2=fcount2+1;
  var b="track";
  
  if(fval2==b)
  {
    fres1="correct answer";

  }
  else{
    fres1="wrong answer";
     }
  
  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+fres1+" with "+fcount2+" attempts"+"</p>");
  });
  afterfcount2=fcount2;
}
function cbcouf3()
{
  fval3=document.getElementById("exf2").value;
  fcount3=fcount3+1;
  var b="textarea";
  
  if(fval3==b)
  {
     fres2="correct answer";

  }
  else{
    fres2="wrong answer";
     }
  
  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+fres2+" with "+fcount3+" attempts"+"</p>");
  });
  afterfcount3=fcount3;
}
function fillupmedbac()
{
  $(document).ready(function(){
    $("#cont1").load("filluppt1.html")

   });
}
function fillupharbac()
{
  $(document).ready(function(){
    $("#cont1").load("filluppt2.html")

   });
}
function mcqmedbac()
{
  $(document).ready(function(){
    $("#cont1").load("mcqpt.html")

   });
}
function mcqharbac()
{
  $(document).ready(function(){
    $("#cont1").load("med.html")

   });
}
function mcqat()
{
  $(document).ready(function(){
    $("#cont1").load("mcqat.html")

   });
}
function fillat()
{
  $(document).ready(function(){
    $("#cont1").load("fillat.html")

   });
}
function mcqatme()
{
  $(document).ready(function(){
    $("#cont1").load("mcqatmed.html")

   });
}
var mcqacount=0,mcqacount1=0,mcqacount2=0;
var maval,maval1,maval2;
function ma1()
{
  maval=document.getElementById("exea1").value;
  
}
function ma2()
{
  maval=document.getElementById("exea2").value;
  
}
function ma3()
{
  maval=document.getElementById("exea3").value;
 
}
var mcqres,mcqres1,mcqres2;
var aftermcqacount,aftermcqacount1,aftermcqacount2;
function mcqeach()
{
  mcqacount=mcqacount+1;
  if(maval=='a')
  {
    mcqres="correct answer";
  }
  else{
     mcqres="wrong answer"
  }

  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+mcqres+" with "+mcqacount+" attempts"+"</p>")
  });
  aftermcqacount=mcqacount;
  
}
function mcqathardback()
{
  $(document).ready(function(){
    $("#cont1").load("mcqatmed.html")

   });
}
function mcqatmedium()
{
  $(document).ready(function(){
    $("#cont1").load("mcqat.html")

   });
}
function mcqathardnext()
{
  $(document).ready(function(){
    $("#cont1").load("mcqathar.html")

   });
}
function mam1()
{
  maval1=document.getElementById("exmm1").value;
  
}
function mam2()
{
  maval1=document.getElementById("exmm2").value;
  
}
function mam3()
{
  maval1=document.getElementById("exmm3").value;
 
}
function mcqeach1()
{
  mcqacount1=mcqacount1+1;
  if(maval1=='b')
  {
    mcqres1="correct answer";
  }
  else{
    mcqres1="wrong answer"
  }

  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+mcqres1+" with "+mcqacount1+" attempts"+"</p>")
  });
  aftermcqacount1=mcqacount1;
  
}
function mah1()
{
  maval2=document.getElementById("exah1").value;
  
}
function mah2()
{
  maval2=document.getElementById("exah2").value;
  
}
function mah3()
{
  maval2=document.getElementById("exah3").value;
 
}
function mcqeach2()
{
  mcqacount2=mcqacount2+1;
  if(maval2=='c')
  {
    mcqres2="correct answer";
  }
  else{
     mcqres2="wrong answer"
  }

  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+mcqres2+" with "+mcqacount2+" attempts"+"</p>")
  });
  aftermcqacount2=mcqacount2;

}
function fillatre()
{
  $(document).ready(function(){
    $("#cont1").load("fillupat1.html")

   });
}
function fillupatnexteasy()
{
  $(document).ready(function(){
    $("#cont1").load("fillupat2.html")

   });
}
function fillupatbackmed()
{
  $(document).ready(function(){
    $("#cont1").load("fillupat1.html")

   });
}
function fillupatnextmed(){
  $(document).ready(function(){
    $("#cont1").load("fillupat3.html")

   });
}
function fillupathardbac(){
  $(document).ready(function(){
    $("#cont1").load("fillupat2.html")

   });
}
var fillcountat1=0,fillcountat2=0,fillcountat3=0;
var fatval1,fatval2,fatval3;
var fatres,fatres1,fatres2;
var afterfillcountat1,afterfillcountat2,afterfillcountat3;
function fillupatcheck1()
{
  fatval1=document.getElementById("exat1").value;
  fillcountat1=fillcountat1+1;
  var b="accumulator";
  
  if(fatval1==b)
  {
     fatres="correct answer";

  }
  else{
     fatres="wrong answer";
     }
  
  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+fatres+" with "+fillcountat1+" attempts"+"</p>");
  });
  afterfillcountat1=fillcountat1;
}
function fillupatcheck2()
{
  fatval2=document.getElementById("exat2").value;
  fillcountat2=fillcountat2+1;
  var b="assembler";
  
  if(fatval2==b)
  {
     fatres1="correct answer";

  }
  else{
    fatres1="wrong answer";
     }
  
  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+fatres1+" with "+fillcountat2+" attempts"+"</p>");
  });
  afterfillcountat2=fillcountat2;
}
function fillupatcheck3()
{
  
  fatval3=document.getElementById("exat3").value;
  
  fillcountat3=fillcountat3+1;
  var b="software";
  
  if(fatval3==b)
  {
     fatres2="correct answer";

  }
  else{
    fatres2="wrong answer";
     }
  
  $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p style='color:white'>"+fatres2+" with "+fillcountat3+" attempts"+"</p>");
  });
  afterfillcountat3=fillcountat3;
}
var videomcqwatch;
function mcqvideo()
{
  videomcqwatch=1;
  $(document).ready(function(){
    $("#cont1").load("mcqvid.html")

   });
   
}
var videofillwatch;
function fillvideo()
{
  videofillwatch=1;
  $(document).ready(function(){
    $("#cont1").load("fillupvid.html")

   });
   
}
function progvideo()
{
  $(document).ready(function(){
    $("#cont1").load("progvid.html")

   });
}
function propt()
{
  $(document).ready(function(){
    $("#cont1").load("propt1.html")

   });
}
function propteasynext()
{
  $(document).ready(function(){
    $("#cont1").load("propt2.html")

   });
}
var videoselect,videowatchc,videowatchcp,videowatchjava,videowatchpy;
function videodecide()
{
  
  videoselect=document.getElementById("langselect").value;
  
  if(videoselect==1)
  {
    videowatchc=1;
    
    $(document).ready(function(){
      $("#videoarea").load("cvid.html")
  
     });
  }
  if(videoselect==2)
  {
    videowatchcp=1;
    
    $(document).ready(function(){
      $("#videoarea").load("c++vid.html")
  
     });
  }
  if(videoselect==3)
  {
    videowatchjava=1;
    $(document).ready(function(){
      $("#videoarea").load("javavid.html")
  
     });
  }
  if(videoselect==4)
  {
    videowatchpy=1;
    $(document).ready(function(){
      $("#videoarea").load("pythonvid.html")
  
     });
  }
}
var pteasyselect;
function langselecteasypt()
{
pteasyselect=document.getElementById("langselecteasypt").value;

}
var pteasycompilecount=0,aftereasycompile,aftermedcompile,afterhardcompile;
function pteasycompile()
{
  if(isNaN(pteasyselect))
  {
    $("#ans").empty();
    $("#ans").append("<p>Select a language</p>")
  }
  else{
    pteasycompilecount=pteasycompilecount+1;
    $(document).ready(function(){
    $("#ans").empty();
    $("#ans").append("<p>Compiled "+ pteasycompilecount+" times</p>")
    });
    aftereasycompile=pteasycompilecount;
  }

}
var ptmedselect;
function langselectmedpt()
{
ptmedselect=document.getElementById("langselectmedpt").value;

}
var ptmedcompilecount=0;
function ptmedcompile()
{
  if(isNaN(ptmedselect))
  {
    $("#ans").empty();
    $("#ans").append("<p>Select a language</p>")
  }
  else{
  ptmedcompilecount=ptmedcompilecount+1;
  $(document).ready(function(){
  $("#ans").empty();
  $("#ans").append("<p>Compiled "+ ptmedcompilecount+" times</p>")
  });
  aftermedcompile=ptmedcompilecount;
}}
function proptmednext()
{
  $(document).ready(function(){
    $("#cont1").load("propt3.html")

   });
}
function proptmedback()
{
  $(document).ready(function(){
    $("#cont1").load("propt1.html")

   });
}
var pthardselect;
function langselecthardpt()
{
pthardselect=document.getElementById("langselecthardpt").value;

}
var pthardcompilecount=0;
function pthardcompile()
{
  if(isNaN(pthardselect))
  {
    $("#ans").empty();
    $("#ans").append("<p>Select a language</p>")
  }
  else{
  pthardcompilecount=pthardcompilecount+1;
  $(document).ready(function(){
  $("#ans").empty();
  $("#ans").append("<p>Compiled "+ pthardcompilecount+" times</p>")
  });
  afterhardcompile=pthardcompilecount;
}}
function propthardback()
{
  $(document).ready(function(){
    $("#cont1").load("propt2.html")

   });
}
function proat()
{
  $(document).ready(function(){
    $("#cont1").load("proat1.html")

   });
}
var ateasyselect;
function langselecteasyat()
{
ateasyselect=document.getElementById("langselecteasyat").value;

}
var ateasycompilecount=0,aftereasycompileat1,aftereasycompileat2,aftereasycompileat3;
function ateasycompile()
{
  if(isNaN(ateasyselect))
  {
    $("#ans").empty();
    $("#ans").append("<p>Select a language</p>")
  }
  else{
  ateasycompilecount=ateasycompilecount+1;
  $(document).ready(function(){
  $("#ans").empty();
  $("#ans").append("<p>Compiled "+ ateasycompilecount+" times</p>")
  });
  aftereasycompileat1=ateasycompilecount;
}}

function proateasynext()
{
  $(document).ready(function(){
    $("#cont1").load("proat2.html")

   });
}
var atmedselect;
function langselectmedat()
{
atmedselect=document.getElementById("langselectmedat").value;

}
var atmedcompilecount=0;
function atmedcompile()
{
  if(isNaN(atmedselect))
  {
    $("#ans").empty();
    $("#ans").append("<p>Select a language</p>")
  }
  else{
  atmedcompilecount=atmedcompilecount+1;
  $(document).ready(function(){
  $("#ans").empty();
  $("#ans").append("<p>Compiled "+ atmedcompilecount+" times</p>")
  });
  aftereasycompileat2=atmedcompilecount;
}}
function proatmednext()
{
  $(document).ready(function(){
    $("#cont1").load("proat3.html")

   });
}
function proatmedback()
{
  $(document).ready(function(){
    $("#cont1").load("proat1.html")

   });
}
var athardselect;
function langselecthardat()
{
athardselect=document.getElementById("langselecthardat").value;

}
var athardcompilecount=0;
function athardcompile()
{
  if(isNaN(athardselect))
  {
    $("#ans").empty();
    $("#ans").append("<p>Select a language</p>")
  }
  else{
  athardcompilecount=athardcompilecount+1;
  $(document).ready(function(){
  $("#ans").empty();
  $("#ans").append("<p>Compiled "+ athardcompilecount+" times</p>")
  });
  aftereasycompileat3=athardcompilecount;
}}
function proathardback()
{
  $(document).ready(function(){
    $("#cont1").load("proat2.html")

   });
}

var starttimem=0,starttimes=0,endtimem,endtimes;
var smin,ssec;
function timestart()
{
  if(starttimem==0&&starttimes==0)
  {

    var d=new Date();
starttimem=d.getMinutes();
starttimes=d.getSeconds();

$(document).ready(function(){
  $("#time").empty();
  $("#time").append("<p>Test started.</p>");
    
});}
else{
  $(document).ready(function(){
    $("#time").empty();
    $("#time").append("<p>Already started.</p>");
    
  });
}
smin=starttimem;
ssec=starttimes;
}

function timestop()
{
  var d=new Date();
  endtimem=d.getMinutes();
  endtimes=d.getSeconds();
  
if(smin>0||ssec>0)
{
endtimem=endtimem-smin;
endtimes=endtimes-ssec;
if(endtimem<0)
{
  endtimem=endtimem+60;
}
if(endtimes<0)
{
  endtimes=endtimes+60;
  endtimem=endtimem-1;
}

$(document).ready(function(){
  $("#time").empty();
  $("#time").append("<p>Time taken is "+ endtimem +" Minutes : "+ endtimes+" seconds</p>");
  starttimem=0;
  smin=0;
  ssec=0;
  starttimes=0;
});}
else{
  $(document).ready(function(){
    $("#time").empty();
    $("#time").append("<p>Start the test.</p>");
    
  });
}
}
var ptmcqtotal=16;
 var ptmcqea=0,ptmcqme=0,ptmcqha=0;
var atmcqtotal=16;
var atmcqea=0,atmcqme=0,atmcqha=0
 var mcqfinalresult=0;
 var fillfinalresult=0;
 var profinalresult=0;
 var mcqptcre=0;
 var proptcre=0;
 var ptfilltotal=30;
 var ptfillea=0,ptfillme=0,ptfillha=0;
 var fillptcre=0;
 var atfilltotal=30;
 var atfillea=0,atfillme=0,atfillha=0;
 var ptprototal=60;
 var ptproea=0,ptprome=0,ptproha=0;
 var atprototal=60;
 var atproea=0,atprome=0,atproha=0;
 var ptc=0,ptcp=0,ptjava=0,ptpy=0;
 var atc=0,atcp=0,atjava=0,atpy=0;
 var timetake=0;
 var atprores=0;
 var ptprores=0;
 var ptmcqres=0;
 var langc=0,langcp=0,langjava=0,langpy=0;
  var overallskill=0;
  var ptfillres=0;
  var atmcqres=0;var atfillres=0;
function skillcalc()
{
 if(overallskill==0)
 {
 if(res=="correct answer"||res=="wrong answer")
{
mcqptcre=1;
if(res=="correct answer")
{
  ptmcqea=1-((aftercount-1)*0.5);
  if(isNaN(ptmcqea))
  {
    ptmcqea=0;
  }
}
if(res1=="correct answer")
{
  
  ptmcqme=5-((aftercount1-1)*0.5);
  if(isNaN(ptmcqme))
  {
    ptmcqme=0;
  }
}

if(res2=="correct answer")
{
  ptmcqha=10-((aftercount2-1)*0.5);
  if(isNaN(ptmcqha))
  {
    ptmcqha=0;
  }
}

}


ptmcqres=(ptmcqea+ptmcqme+ptmcqha);
if(isNaN(ptmcqres))
{
ptmcqres=0;
}
if(mcqres=="correct answer")
{
  atmcqea=1-((aftermcqacount-1)*0.5);
  if(isNaN(atmcqea))
  {
    atmcqea=0;
  }
}
if(mcqres1=="correct answer")
{
  
  atmcqme=5-((aftermcqacount1-1)*0.5);
  if(isNaN(atmcqme))
  {
    atmcqme=0;
  }
}

if(mcqres2=="correct answer")
{
  atmcqha=10-((aftermcqacount2-1)*0.5);
  if(isNaN(atmcqha))
  {
    atmcqha=0;
  }
}

atmcqres=(atmcqea+atmcqme+atmcqha);
if(isNaN(atmcqres))
{atmcqres=0;}
if(videomcqwatch==1)
  {
    mcqfinalresult=mcqfinalresult+1;
  }
  if(mcqptcre==1)
  {
    mcqfinalresult=mcqfinalresult+(1*(ptmcqres/ptmcqtotal));
  }
  mcqfinalresult=mcqfinalresult+(1*(atmcqres/atmcqtotal));
  
  if(fres=="correct answer"||fres=="wrong answer")
  {
  fillptcre=1;
  if(fres=="correct answer")
  {
    ptfillea=5-((afterfcount1-1)*0.5);
    if(isNaN(ptfillea))
    {
      ptfillea=0;
    }
  }
  if(fres1=="correct answer")
  {
    
    ptfillme=10-((afterfcount2-1)*0.5);
    if(isNaN(ptfillme))
    {
      ptfillme=0;
    }
  }
  
  if(fres2=="correct answer")
  {
    ptfillha=15-((afterfcount3-1)*0.5);
    if(isNaN(ptfillha))
    {
      ptfillha=0;
    }
  }
  
  }
  
  
  ptfillres=(ptfillea+ptfillme+ptfillha);
  if(isNaN(ptfillres))
  {
    ptfillres=0;
  }
  if(fatres=="correct answer")
  {
    atfillea=5-((afterfillcountat1-1)*0.5);
    if(isNaN(atfillea))
    {
      atfillea=0;
    }
  }
  if(fatres1=="correct answer")
  {
    
    atfillme=10-((afterfillcountat2-1)*0.5);
    if(isNaN(atfillme))
    {
      atfillme=0;
    }
  }
  
  if(fatres2=="correct answer")
  {
    atfillha=15-((afterfillcountat3-1)*0.5);
    if(isNaN(atfillha))
    {
      atfillha=0;
    }
  }
  
  atfillres=(atfillea+atfillme+atfillha);
  if(isNaN(atfillres))
  {
    atfillres=0;
  }
  if(videofillwatch==1)
  {
    fillfinalresult=fillfinalresult+1;
  }
  if(fillptcre==1)
  {
    fillfinalresult=fillfinalresult+(1*(ptfillres/ptfilltotal));
  }
  fillfinalresult=fillfinalresult+(1*(atfillres/atfilltotal));
if(aftereasycompile>0)
{
  proptcre=1;
  ptproea=10-((aftereasycompile-1)*0.25);
if(isNaN(ptproea))
{
ptproea=0;
}
  ptprome=20-((aftermedcompile-1)*0.25);
  if(isNaN(ptprome))
  {
  ptprome=0;
  }
  ptproha=30-((afterhardcompile-1)*0.25);
  if(isNaN(ptproha))
  {
  ptproha=0;
  }
}

ptprores=ptproea+ptprome+ptproha;
if(isNaN(ptprores))
{
  ptprores=0;
}
atproea=10-((aftereasycompileat1-1)*0.25);
if(isNaN(atproea))
{
atproea=0;
}  
atprome=20-((aftereasycompileat2-1)*0.25);
if(isNaN(atprome))
{
atprome=0;
} 
atproha=30-((aftereasycompileat3-1)*0.25);
if(isNaN(atproha))
{
atproha=0;
}
  atprores=atproea+atprome+atproha;  
  if(isNaN(atprores))
  {
    atprores=0;
  }
if(pteasyselect==1)
{
  ptc=ptc+1;
}
if(pteasyselect==2)
{
  ptcp=ptcp+1;
}
if(pteasyselect==3)
{
  ptjava=ptjava+1;
}
if(pteasyselect==4)
{
  ptpy=ptpy+1;
}
if(ptmedselect==1)
{
  ptc=ptc+2;
}
if(ptmedselect==2)
{
  ptcp=ptcp+2;
}
if(ptmedselect==3)
{
  ptjava=ptjava+2;
}
if(ptmedselect==4)
{
  ptpy=ptpy+2;
}
if(pthardselect==1)
{
  ptc=ptc+3;
}
if(pthardselect==2)
{
  ptcp=ptcp+3;
}
if(pthardselect==3)
{
  ptjava=ptjava+3;
}
if(pthardselect==4)
{
  ptpy=ptpy+3;
}


if(ateasyselect==1)
{
  atc=atc+1;
}
if(ateasyselect==2)
{
  atcp=atcp+1;
}
if(ateasyselect==3)
{
  atjava=atjava+1;
}
if(ateasyselect==4)
{
  atpy=atpy+1;
}
if(atmedselect==1)
{
  atc=atc+2;
}
if(atmedselect==2)
{
  atcp=atcp+2;
}
if(atmedselect==3)
{
  atjava=atjava+2;
}
if(atmedselect==4)
{
  atpy=atpy+2;
}
if(athardselect==1)
{
  atc=atc+3;
}
if(pthardselect==2)
{
  atcp=atcp+3;
}
if(athardselect==3)
{
  atjava=atjava+3;
}
if(athardselect==4)
{
  atpy=atpy+3;
}

if(videoselect>0)
  {
    profinalresult=profinalresult+1;
   
  }
  if(proptcre==1)
  {
    profinalresult=profinalresult+(1*(ptprores/ptprototal));
  }
  profinalresult=profinalresult+(2*(atprores/atprototal));
  
  
  if(videowatchc!=1)
  {
    videowatchc=0;
  }
  if(videowatchcp!=1)
  {
    videowatchcp=0;
  }
  if(videowatchjava!=1)
  {
    videowatchjava=0;
  }
  if(videowatchpy!=1)
  {
    videowatchpy=0;
  }
langc=ptc+atc+videowatchc;
langcp=ptcp+atcp+videowatchcp;
langjava=ptjava+atjava+videowatchjava;
langpy=ptpy+atpy+videowatchpy;
endtimem=(endtimem*60)+endtimes;
if(endtimem>180)
{
  timetake=timetake+1;
  endtimem=endtimem-180;
}
if(isNaN(profinalresult))
{
  profinalresult=0;
}
overallskill=(mcqfinalresult+fillfinalresult+profinalresult)-(timetake*0.125);

if(isNaN(overallskill) || overallskill<0)
{
  overallskill=0;
}
$(document).ready(function(){
  $("#cont1").empty();
  $("#cont1").append("<h4 style='color: white;'>MCQ Skill Rating:</h4>");
  $("#cont1").append("<h6 style='color: white;'>The rating is "+ mcqfinalresult+" out of 3.</h6><br>");
  $("#cont1").append("<h4 style='color: white;'>Fill-up Skill Rating</h4>");
  $("#cont1").append("<h6 style='color: white;'>The rating is "+ fillfinalresult+" out of 3.</h6><br>");
  $("#cont1").append("<h4 style='color: white;'>Programming Skill Rating:</h4>");
  $("#cont1").append("<h6 style='color: white;'>The rating is "+ profinalresult+" out of 4.</h6><h6 style='color: white;'>Rating in C language is " +langc +" out of 13.</h6><h6 style='color: white;'>Rating in C++ language is " +langcp +" out of 13.</h6><h6 style='color: white;'>Rating in java language is " +langjava +" out of 13.</h6><h6 style='color: white;'>Rating in python language is " +langpy +" out of 13.</h6><br>");
  $("#cont1").append("<h4 style='color: white;'>Overall Student Skill Rating:</h4>");
  $("#cont1").append("<h6 style='color: white;'>The rating is "+ overallskill+" out of 10.</h6><br>");
});
}
}
