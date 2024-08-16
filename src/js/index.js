
var i = 0;
var runned = 0;
var  runonce = 0;
var isInited = 0;
var used = 0;
var input = document.getElementsByClassName("screen");

$(document).keyup(function(event) {
        event.preventDefault();
        if (event.keyCode === 13 && used == 0) {
            used = 1;
            $(".contents").html("");
            const audio = document.getElementById('fairy');
            setTimeout(function() {audio.play();}, 600);
            setInterval(set_code, 60);
        }
});

function set_code() {
    const newcpp1 = `
&nbsp;&nbsp;&nbsp;&nbsp;//////////////////////////////////////////////$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;copyright(C)A.K.A&nbsp;Hollow&nbsp;Deep&nbsp;Dive&nbsp;System$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Led&nbsp;by&nbsp;Helios&nbsp;Reserch&nbsp;Institute$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Author:BW$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;deep_dive_prototype_v4.h$
&nbsp;&nbsp;&nbsp;&nbsp;//////////////////////////////////////////////$
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;#ifndef&nbsp;DEEP_DIVE_PROTOTYPE_V4_H$
&nbsp;&nbsp;&nbsp;&nbsp;#define&nbsp;DEEP_DIVE_PROTOTYPE_V4_H$
&nbsp;&nbsp;&nbsp;&nbsp;#include&nbsp;<MAP>$
&nbsp;&nbsp;&nbsp;&nbsp;#include&nbsp;<helios_signal.h>$
&nbsp;&nbsp;&nbsp;&nbsp;namespace&nbsp;Hollow$
&nbsp;&nbsp;&nbsp;&nbsp;{$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class&nbsp;DeepDivePrototypeV4&nbsp;:&nbsp;public&nbsp;DeepDiveBase:$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;private:$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HELIOS::BangbooHandle&nbsp;m_handle$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HChessboardMap<EHDomainType.EHSensorType>&nbsp;m_crossDomainSensorMap;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HSensorContainer<VisualSensor>&nbsp;m_visualSensorContainer;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public:$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;virtual&nbsp;void&nbsp;RegisterBangbooHandle(HollowSignal&nbsp;signal)&nbsp;override;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HCRESULI&nbsp;SyncVisualSensor(const&nbsp;HHatrics&nbsp;matWorld,HLINT&nbsp;hollowIndex);$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}$
&nbsp;&nbsp;&nbsp;&nbsp;}$
&nbsp;&nbsp;&nbsp;&nbsp;#endif&nbsp;//&nbsp;DEEP_DIVE_PROTOTYPE_V4_H$`;
        const newcpp2 = `
&nbsp;&nbsp;&nbsp;&nbsp;//////////////////////////////////////////////$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;copyright(C)A.K.A&nbsp;Hollow&nbsp;Deep&nbsp;Dive&nbsp;System$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Led&nbsp;by&nbsp;Helios&nbsp;Reserch&nbsp;Institute$
&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Author:BW$
&nbsp;&nbsp;&nbsp;&nbsp;//////////////////////////////////////////////$
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;#include&nbsp;"deep_dive_prototype_v4.h"$
&nbsp;&nbsp;&nbsp;&nbsp;#include&nbsp;"hollow_toolkit.h"$
&nbsp;&nbsp;&nbsp;&nbsp;#include&nbsp;"hollow_boost.h"$
&nbsp;&nbsp;&nbsp;&nbsp;namespace&nbsp;Hollow$
&nbsp;&nbsp;&nbsp;&nbsp;{$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;void&nbsp;DeepDivePrototypeV4::RegisterBangbooHandle(Hollowsignal&nbsp;signal)$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(m_initState&nbsp;!=&nbsp;HollowInitState.HIS_DUCCESS)$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EHBoostType&nbsp;boostType&nbsp;=&nbsp;signal->GetBoostType();$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;switch(boostType)$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case&nbsp;EHBoostType.DEFAULT:$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_handle&nbsp;=&nbsp;HELIOS::BangbooHandle.DEFAULT;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case&nbsp;EHBoostType.ERROR:$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}$
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}$
&nbsp;&nbsp;&nbsp;&nbsp;}$`;
    if (runonce == 0) code = newcpp1;
    else code = newcpp2;
    if ( (i > code.length || i < 0 ) && runonce == 0 ) {
        i = 0;
        runonce = 1;
        $(".contents").html("");
        return 0;
    }
    if (i <= code.length && i >= 0) {
        console.log("<pre class=\"codefont\">"+code.slice(i + 1, code.indexOf("$", i + 1)) + "</pre>");
        $(".contents").html($(".contents").html() + "<div class=\"codefont\">"+(code.slice(i + 1, code.indexOf("$", i + 1))).replace(/\s+/g, "&nbsp;") + "</div>")
        i = code.indexOf("$", i + 1);
    } else {
        $(".contents").html("");
        clearInterval();
        start_pict();
    }
}

function start_pict() {
    if (runned == 1) return 0;
    runned = 1;
    $(".loader").hide();

    $(".start-bg").fadeIn(3000);
    setTimeout(function() {
        $(".start-bg").fadeOut(200);
        $(".mainpage").fadeIn(200);
    }, 7000);
}

$(document).ready(function() {
    var audio = document.getElementById("fairy");
    audio.loop = false;
    audio.addEventListener('ended', function () {
        start_write();
    }, false);

    window.term = new Terminal({
        rendererType: "canvas", //渲染类型
        rows: 40, //行数
        cols: 100, // 不指定行数，自动回车后光标从下一行开始
        convertEol: true, //启用时，光标将设置为下一行的开头
        // scrollback: 50, //终端中的回滚量
        disableStdin: false, //是否应禁用输入
        // cursorStyle: "underline", //光标样式
        cursorBlink: true, //光标闪烁
        theme: {
          foreground: "#ECECEC", //字体
          background: "#000000", //背景色
          cursor: "help", //设置光标
          lineHeight: 20
        }
    });
    window.term.open(document.getElementById("terminal"));
})

function start_write(){
    $("#battle")[0].play()
    var line = `    Hello [Phaethon].$    The Terminal is Opened.$    Have a Good Time.`;
    var i = 0;
    setInterval(function() {
        if (i == 71) {
            clearInterval();
            set_term();
            return 0;
        }
        if (line[i] == "$")
            window.term.write("\r\n");
        else if (line[i] == "[")
            window.term.write("\x1b[31;1m");
        else if (line[i] == ']')
            window.term.write("\x1b[0m");
        else
            window.term.write(line[i]);
        i++;
    }, 100);
    
}

function set_term() {
    if (isInited == 1) return 0;
    isInited = 1;
    window.term.prompt = _ => {
        term.write("\r\n\x1b[33m$\x1b[0m ");
    }
    window.term.prompt();
    term.prompt()
    term.onKey(e => {
        const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey
        if (e.domEvent.keyCode === 13) {
          term.prompt()
        } else if (e.domEvent.keyCode === 8) { 
          if (term._core.buffer.x > 2) {
            term.write('\b \b')
          }
        } else if (printable) {
          term.write(e.key)
        }
        console.log(1,'print', e.key)
      })
      term.onData(key => {
        if(key.length > 1) term.write(key)
    });
}