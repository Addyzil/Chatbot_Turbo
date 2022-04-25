jQuery(document).ready(function($) {
	jQuery(document).on('click', '.iconInner', function(e) {
		jQuery(this).parents('.botIcon').addClass('showBotSubject');
		$("[name='msg']").focus();
	});

	jQuery(document).on('click', '.closeBtn, .chat_close_icon', function(e) {
		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').removeClass('showMessenger');
	});

	jQuery(document).on('submit', '#botSubject', function(e) {
		e.preventDefault();

		jQuery(this).parents('.botIcon').removeClass('showBotSubject');
		jQuery(this).parents('.botIcon').addClass('showMessenger');
	});
	
	/* Chatboat Code */
	$(document).on("submit", "#messenger", function(e) {
		e.preventDefault();

		var val = $("[name=msg]").val().toLowerCase();
		var mainval = $("[name=msg]").val();
		name = '';
		nowtime = new Date();
		nowhoue = nowtime.getHours();

		function userMsg(msg) {
			$('.Messages_list').append('<div class="msg user"><span class="avtr"></span><span class="responsText">' + mainval + '</span></div>');
		};
		function appendMsg(msg) {
			$('.Messages_list').append('<div class="msg"><span class="avtr"></span><span class="responsText">' + msg + '</span></div>');
			$("[name='msg']").val("");
		};


		userMsg(mainval);let count=0;
		if( val.indexOf("hello") > -1 || val.indexOf("hi") > -1 || val.indexOf("good morning") > -1 || val.indexOf("good afternoon") > -1 || val.indexOf("good evening") > -1 || val.indexOf("good night") > -1 ) {
			if(nowhoue >= 12 && nowhoue <= 16) {
				appendMsg('good afternoon');
			} else if(nowhoue >= 10 && nowhoue <= 12) {
				appendMsg('hi');
			} else if(nowhoue >= 0 && nowhoue <= 10) {
				appendMsg('good morning');
			} else {
				appendMsg('good evening');
			}

			appendMsg("what's you name?");}

		// } else if( val.indexOf("i have problem with") > -1) {
		// 	if (val.indexOf("girlfriend") > -1 || val.indexOf("gf") > -1) {

		// 		appendMsg("take out your girlfriend, for dinner or movie.");
		// 		appendMsg("is it helpful? (yes/no)");

		// 	} else if (val.indexOf("boyfriend") > -1 || val.indexOf("bf") > -1) {
		// 		appendMsg("buy something for him.");
		// 		appendMsg("is it helpful? (yes/no)");
		// 	} else {
		// 		appendMsg("sorry, i'm not able to get you point, please ask something else.");
		// 	}
		// } 
		else if ((val.indexOf("Right of persons with disabilities act") > -1)|| val.indexOf("Disabilaties act") > -1||val.indexOf("dis")>-1) {
			
				if(val.indexOf("Women")>-1||val.indexOf("Child")>-1){
					appendMsg("The appropriate Government and the local authorities shall take measures to ensure that the women and children with disabilities enjoy their rightsequally with others.(2) The appropriate Government and local authorities shall ensure that all children with disabilitiesshall have right on an equal basis to freely express their views on all matters affecting them and provide them appropriate support keeping in view their age and disability.");
					appendMsg("is it helpful? (yes/no)");}
			else{
			appendMsg("(a) respect for inherent dignity, individual autonomy including the freedom to make one's own \nchoices, and independence of persons;\n(b) non-discrimination;\n(c) full and effective participation and inclusion in society;\n(d) respect for difference and acceptance of persons with disabilities as part of human diversity\nand humanity;\n(e) equality of opportunity;\n(f) accessibility;\n(g) equality between men and women;");
			 appendMsg("is it helpful? (yes/no)");
		}
		} 

		else if (val.indexOf("The black money and imposition of tax act") > -1 || val.indexOf("tax act") > -1) {
			
		
		
		appendMsg("(a) respect for inherent dignity, individual autonomy including the freedom to make one's own \nchoices, and independence of persons;\n(b) non-discrimination;\n(c) full and effective participation and inclusion in society;\n(d) respect for difference and acceptance of persons with disabilities as part of human diversity\nand humanity;\n(e) equality of opportunity;\n(f) accessibility;\n(g) equality between men and women;");
		appendMsg("is it helpful? (yes/no)");}
		

		
		else if (val.indexOf("The Sexual harassment of Women at workplace act") > -1 || val.indexOf("harassment") > -1) {
			if(val.indexOf("complaint")>-1){
				appendMsg("—(1) Any aggrieved woman may make, in writing, a complaintof sexual harassment at workplace to the Internal Committee if so constituted, or the Local Committee, incase it is not so constituted, within a period of three months from the date of incident and in case of aseries of incidents, within a period of three months from the date of last incident:Provided that where such complaint cannot be made in writing, the Presiding Officer or any Memberof the Internal Committee or the Chairperson or any Member of the Local Committee, as the case may be,shall render all reasonable assistance to the woman for making the complaint in writing:Provided further that the Internal Committee or, as the case may be, the Local Committee may, forthe reasons to be recorded in writing, extend the time limit not exceeding three months , if it is satisfiedthat the circumstances were such which prevented the woman from filing a complaint within the saidperiod.(2) Where the aggrieved woman is unable to make a complaint on account of her physical or mentalincapacity or death or otherwise, her legal heir or such other person as may be prescribed may make acomplaint under this section");
				appendMsg("is it helpful? (yes/no)");
			}
			else{

			
			appendMsg("(a) respect for inherent dignity, individual autonomy including the freedom to make one's own \nchoices, and independence of persons;\n(b) non-discrimination;\n(c) full and effective participation and inclusion in society;\n(d) respect for difference and acceptance of persons with disabilities as part of human diversity\nand humanity;\n(e) equality of opportunity;\n(f) accessibility;\n(g) equality between men and women;");
			appendMsg("is it helpful? (yes/no)");}}

			// else if(val.indexOf("Child marriage")>-1){
			// 	if(val.indexOf("punish")>-1){
			// 	   appendMsg("Whoever, being a male adult above eighteen years of age, contracts a child marriage shall be punishable with rigorous imprisonment which may extend to two years or with fine which may extend to one lakh rupees or with both");
			// 	   appendMsg("is it helpful? (yes/no)");
			// 	}
			
	
			// else if(val.indexOf(val.indexOf("courts")>-1)){
				
			// 		appendMsg("(1)Notwithstanding anything to the contrary contained in this Act. (2) A complaint under sub-section may be made by any person having personal knowledge or reason to believe, and a non-governmental organisation having reasonable information, relating to the likelihood of taking place of solemnisation of a child marriage or child marriages.(3) The Court of the Judicial Magistrate of the first class or the Metropolitan Magistrate may also take suomotu cognizance on the basis of any reliable report or information.");
			// 		appendMsg("is it helpful? (yes/no)");
				
			// }
			// else{
			// 		appendMsg("The State Government shall, by notification in the Official Gazette, appoint for the whole State, or such part thereof as may be specified in that notification, an officer or officers to be known as the Child Marriage Prohibition Officer having jurisdiction over the area or areas specified in the notification.");
			// 		appendMsg("is it helpful? (yes/no)");
			// 	}
			// }

		else if( val.indexOf("yes") > -1) {

			var nowtime = new Date();
			var nowhoue = nowtime.getHours();
			appendMsg("it's my pleasure that i can help you");

			saybye();
		} else if( val.indexOf("no") > -1) {

			var nowtime = new Date();
			var nowhoue = nowtime.getHours();
			appendMsg("it's my bad that i can't able to help you. please try letter");

			saybye();
		} else if( val.indexOf("my name is ") > -1 || val.indexOf("i am ") > -1 || val.indexOf("i'm ") > -1 || val.split(" ").length < 2 ) {/|| mainval != ""/
			// var name = "";
			if(val.indexOf("my name is") > -1) {
				name = val.replace("my name is", "");
			}

			else if(val.indexOf("i am") > -1) {
				name = val.replace("i am", "");
			}

			else if(val.indexOf("i'm") > -1) {
				name = val.replace("i'm", "");
			}

			else {
				name = mainval;
			}

			// appendMsg("hi " + name + ", how can i help you?");
			appendMsg("hi " + name + ", how can i help you?");
		} else {
			appendMsg("sorry i'm not able to understand what do you want to say");
		
		}

		function saybye() {
			if (nowhoue <= 10) {
				appendMsg(" have nice day! :)");
			} else if (nowhoue >= 11 || nowhoue <= 20) {
				appendMsg(" bye!");
			} else {
				appendMsg(" good night!");
			}
		}

		var lastMsg = $('.Messages_list').find('.msg').last().offset().down;
		$('.Messages').animate({scrollDown: lastMsg}, 'slow');
	});
	/* Chatboat Code */
})