(function () {
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');

    if (!toggle) {
        return;
    }

    function updateToggle(theme) {
        var isDark = theme === 'dark';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    updateToggle(root.dataset.theme || 'light');

    toggle.addEventListener('click', function () {
        var nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = nextTheme;

        try {
            localStorage.setItem('theme', nextTheme);
        } catch (error) {
            // The selected theme still applies for the current page view.
        }

        updateToggle(nextTheme);
    });
}());
