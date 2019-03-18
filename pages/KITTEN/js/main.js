$(document).ready(function() {
    var plinks = [
	{
            name: 'atlas',
			plink: 'http://atlas.lgbt/'
        },
			{
            name: 'snowwy',
			plink: 'http://steamcommunity.com/profiles/76561197983768957'
        },
       	{
            name: 'thalorim',
			plink: 'http://steamcommunity.com/profiles/76561198125204629'
        },
		{
            name: 'zyth',
			plink: 'http://steamcommunity.com/profiles/76561198048031744'
       },       
	   {
            name: 'jasp8r',
			plink: 'http://steamcommunity.com/profiles/76561198266927056'
        },
		{
            name: 'draconiz',
			plink: 'http://steamcommunity.com/profiles/76561198305765111'
        },
        {
            name: 'thomas',
			plink: 'http://steamcommunity.com/profiles/76561198045476941'
        },
		{
            name: 'trife',
			plink: 'http://steamcommunity.com/profiles/76561198149557274'
        },
		{
            name: 'rob',
			plink: 'http://steamcommunity.com/profiles/76561198032041204'
        },
		{
            name: 'krypt',
			plink: 'http://steamcommunity.com/profiles/76561198086409388'
        },
		{
            name: 'damage',
			plink: 'http://steamcommunity.com/profiles/76561198047110415'
        },
		{
            name: 'eclipse',
			plink: 'http://steamcommunity.com/profiles/76561198334959586'
        },
		{
            name: 'lawrie',
			plink: 'http://steamcommunity.com/profiles/76561198104717773'
        },
		{
            name: 'stef',
			plink: 'http://steamcommunity.com/profiles/76561198255273848'
        },
		{
            name: 'viru',
			plink: 'http://steamcommunity.com/profiles/76561198058806711'
        },
		{
            name: 'rem',
			plink: 'http://steamcommunity.com/profiles/76561198006001039'
        },
		{
            name: 'drepz',
			plink: 'http://steamcommunity.com/profiles/76561198173990145'
        },
        {
            name: 'bubbles',
			plink: 'http://steamcommunity.com/profiles/76561198119409760'
		},
        {
            name: 'aevoa',
			plink: 'http://steamcommunity.com/profiles/76561198112219279'
		},
		{
            name: 'xenu',
			plink: 'http://steamcommunity.com/profiles/76561198045110528'
		},
		{
            name: 'truffles',
			plink: 'http://steamcommunity.com/profiles/76561198098462755'
		},
        {
            name: 'azrael',
			plink: 'https://soundcloud.com/azraeltheangelofdeath/'
        },
        {
            name: 'fin',
			plink: 'http://steamcommunity.com/profiles/76561198262209208'
        },
        {
            name: 'aaron',
			plink: 'http://steamcommunity.com/profiles/76561198131149556'
        },
        {
            name: 'arch',
			plink: 'http://steamcommunity.com/profiles/76561198114131811'
        },
        {
            name: 'gia',
			plink: 'http://steamcommunity.com/profiles/76561198263073509'
        },
        {
            name: 'jewski',
			plink: 'http://steamcommunity.com/profiles/76561198099077665'
        },
        {
            name: 'nemo',
			plink: 'https://twitter.com/nemohhtv/'
        },
        {
            name: 'furby',
			plink: 'https://twitter.com/ohmyfurby'
        },
        {
            name: 'transaction',
			plink: 'http://ogusers.com/transaction'
        },
        {
            name: 'reyz',
			plink: 'http://steamcommunity.com/profiles/76561198219837619'
        },
        {
            name: 'daniel',
			plink: 'http://twitter.com/bronze'
        },
        {
            name: 'midnight society',
			plink: 'http://soundcloud.com/mnscollective'
        },
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="'+ plink.plink + '" target="_blank" style="text-decoration:none;">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' · ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('music');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});