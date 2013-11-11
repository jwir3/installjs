function Installer() { 
	var installerLocal = this;
	installerLocal.steps = new Array();	
	installerLocal.currentStep = -1;
}

Installer.prototype.addStep = function(installStep) {
	this.steps.push(installStep);
}

Installer.prototype.nextStep = function() {
	if (this.currentStep === -1) {
		this.currentStep = 0;
	}

	if (this.currentStep >= this.steps.length) {
		throw "Current step is not available. Maybe not enough steps loaded?";
	}

	this.steps[this.currentStep].show();
}

// Possible options:
// showButtonsAlways: If set to true, then the prev/next buttons will be shown, but disabled, if a previous or next step is not registered.
function InstallerStep(processorLocation, userInterfaceHTML, userInterfaceLocationId, nextStep, prevStep, options)
{
	var installerStep = this;

    installerStep.options = options;
	installerStep.uiId = userInterfaceLocationId;
	installerStep.html = userInterfaceHTML;
	if (prevStep || options.showButtonsAlways) {
		if (!prevStep) {
			installerStep.html = installerStep.html + "<input type=\"button\" disabled=\"true\" value=\"Previous\" onclick=\"installerStep.next();\" />";
		} else {
			installerStep.html = installerStep.html + "<input type=\"button\" value=\"Previous\" onclick=\"installerStep.next();\" />";
		}
	}

	if (nextStep || options.showButtonsAlways) {
		if (!prevStep) {
			installerStep.html = installerStep.html + "<input type=\"button\" disabled=\"true\" value=\"Next\" onclick=\"installerStep.next();\" />";
		} else {
			installerStep.html = installerStep.html + "<input type=\"button\" value=\"Next\" onclick=\"installerStep.next();\" />";
		}
	}
	
	installerStep.nextStep = nextStep;
	installerStep.prevStep = prevStep;
	installerStep.procLoc = processorLocation;
}

InstallerStep.prototype.show = function() {
	$('#' + this.uiId).html(this.html);
	$('#' + this.uiId).show();	
}