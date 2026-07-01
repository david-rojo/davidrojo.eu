(function () {
	'use strict';

	var measurementId = 'G-XNDJD39B6B';
	var storageKey = 'analyticsConsent';
	var acceptedValue = 'accepted';
	var rejectedValue = 'rejected';
	var analyticsLoaded = false;

	window['ga-disable-' + measurementId] = true;

	function getConsent() {
		try {
			return localStorage.getItem(storageKey);
		} catch (error) {
			return null;
		}
	}

	function setConsent(value) {
		try {
			localStorage.setItem(storageKey, value);
		} catch (error) {
			// Consent UI should still work when storage is unavailable.
		}
	}

	function showBanner() {
		if (window.applySiteLanguage && window.getSiteLanguage) {
			window.applySiteLanguage(window.getSiteLanguage());
		}

		var banner = document.querySelector('[data-cookie-consent]');
		if (banner) {
			banner.hidden = false;
		}
	}

	function hideBanner() {
		var banner = document.querySelector('[data-cookie-consent]');
		if (banner) {
			banner.hidden = true;
		}
	}

	function loadAnalytics() {
		if (analyticsLoaded) {
			return;
		}

		window['ga-disable-' + measurementId] = false;
		window.dataLayer = window.dataLayer || [];
		window.gtag = window.gtag || function () {
			window.dataLayer.push(arguments);
		};

		window.gtag('js', new Date());
		window.gtag('config', measurementId);

		var script = document.createElement('script');
		script.async = true;
		script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
		document.head.appendChild(script);

		analyticsLoaded = true;
	}

	function rejectAnalytics() {
		window['ga-disable-' + measurementId] = true;
	}

	document.addEventListener('DOMContentLoaded', function () {
		var consent = getConsent();

		if (consent === acceptedValue) {
			loadAnalytics();
		} else if (consent !== rejectedValue) {
			showBanner();
		}

		document.querySelectorAll('[data-cookie-accept]').forEach(function (button) {
			button.addEventListener('click', function () {
				setConsent(acceptedValue);
				loadAnalytics();
				hideBanner();
			});
		});

		document.querySelectorAll('[data-cookie-reject]').forEach(function (button) {
			button.addEventListener('click', function () {
				setConsent(rejectedValue);
				rejectAnalytics();
				hideBanner();
			});
		});

		document.querySelectorAll('[data-cookie-settings]').forEach(function (button) {
			button.addEventListener('click', function () {
				showBanner();
			});
		});
	});
}());
