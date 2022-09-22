export default function(op) {
	let init = () => {
		let _g_defaultOp = {
			HEADER: '.c-header01',
			SPEED: 500,
		}
		let _g_op = Object.assign(_g_defaultOp, op);
		$('a[href^="#"]').click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top - $(_g_op.HEADER).height();
			$("html, body").animate({scrollTop:position}, _g_op.SPEED, "swing");
			return false;
		});
	}
	init();
}