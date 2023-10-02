var loc=window.location.search.substring(1);
if(loc.length==0)loc="gallery";
$("#iframe").attr("src","https://tclauncher_admin.gitee.io/doticworks/app/"+loc);