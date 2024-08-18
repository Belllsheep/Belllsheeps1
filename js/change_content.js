var today=new Date();
var currentMin=today.getMinutes();
var currentHour=today.getHours();
var greeting='TAT此处应该是寒暄语句……怎么没有加载出来？'
if(currentHour>=0 && currentHour<5) greeting='这个点你不在睡觉在干嘛！快去睡觉！';
else if(currentHour>=5 && currentHour<11) greeting='美好的一天开始了~今天你打算做什么呢？';
else if(currentHour>=11 && currentHour<13) greeting='按时吃午饭了吗？吃饱了下午才有力气干活哦';
else if(currentHour>=13 && currentHour<17) greeting='加油加油……很快就收工了';
else if(currentHour>=17 && currentHour<21) greeting='今天都干了什么呢？一定是收获满满的一天吧~';
else if(currentHour>=21 && currentHour<24) greeting='该洗洗睡了……做个好梦！';
var el=document.getElementById('name');
el.textContent='小然姐，现在已经'+currentHour.toString()+'点'+currentMin.toString()+'分了。'+greeting;
