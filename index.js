'use strict';

/**
 * The ruby element allows one or more spans of phrasing content to be marked with ruby annotations.
 * Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian
 * typography as a guide for pronunciation or to include other annotations. In Japanese, this form
 * of typography is also known as furigana.
 *
 * Usage: {% ruby 汉<hàn>语<yǔ>  %}
 */
function handleRuby(args) {
    const rubys = args.join(' ').match(/.+?<.+?>/g);
    if (rubys == null) return "";
    let element = '';
    rubys.forEach(arg => {
        const groups = /(.+?)<(.+?)>/g.exec(arg);
        if (groups.length === 3) {
            const origin = groups[1].trim();
            const ruby = groups[2].trim();
            element += origin + '<rp>(</rp><rt>' + ruby + '</rt><rp>)</rp>';
        }
    });
    return '<strong><ruby>' + element + '</ruby></strong>';
}

hexo.extend.tag.register('ruby', handleRuby);