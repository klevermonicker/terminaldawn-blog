// TerminalDawn Theme Switcher
(function() {
    const themes = {
        synthwave: {
            name: 'Synthwave',
            background: '#0a0a0f',
            backgroundSecondary: '#1a0d2e',
            accent: '#ff00ff',
            accentAlpha: 'rgba(255, 0, 255, 0.7)',
            text: '#00ffff',
            textSecondary: '#ff6b9d',
            textMuted: '#8892b0',
            border: '#16213e'
        },
        terminal: {
            name: 'Terminal',
            background: '#000000',
            backgroundSecondary: '#111111',
            accent: '#00cc33',
            accentAlpha: 'rgba(0, 204, 51, 0.7)',
            text: '#33ff66',
            textSecondary: '#ffcc00',
            textMuted: '#888888',
            border: '#444444'
        },
        solar: {
            name: 'Solar',
            background: '#0f1419',
            backgroundSecondary: '#1e2a3a',
            accent: '#ffaa00',
            accentAlpha: 'rgba(255, 170, 0, 0.7)',
            text: '#ffcc44',
            textSecondary: '#66aaff',
            textMuted: '#8899aa',
            border: '#334455'
        },
        minimal: {
            name: 'Minimal',
            background: '#1e1e1e',
            backgroundSecondary: '#2d2d30',
            accent: '#ff6600',
            accentAlpha: 'rgba(255, 102, 0, 0.7)',
            text: '#f8f8f2',
            textSecondary: '#a6e22e',
            textMuted: '#75715e',
            border: '#3e3d32'
        }
    };

    function applyTheme(themeName) {
        const theme = themes[themeName];
        if (!theme) return;

        const root = document.documentElement;
        root.style.setProperty('--background', theme.background);
        root.style.setProperty('--background-secondary', theme.backgroundSecondary);
        root.style.setProperty('--accent', theme.accent);
        root.style.setProperty('--accent-alpha-70', theme.accentAlpha);
        root.style.setProperty('--accent-alpha-20', theme.accent.replace('1)', '0.2)'));
        root.style.setProperty('--text', theme.text);
        root.style.setProperty('--text-secondary', theme.textSecondary);
        root.style.setProperty('--text-muted', theme.textMuted);
        root.style.setProperty('--border', theme.border);

        // Update theme switcher button text
        const themeSwitcher = document.getElementById('theme-switcher');
        if (themeSwitcher) {
            themeSwitcher.textContent = `Theme: ${theme.name}`;
        }

        // Save preference
        localStorage.setItem('terminaldawn-theme', themeName);
    }

    function initThemeSwitcher() {
        // Get saved theme or default to synthwave
        const savedTheme = localStorage.getItem('terminaldawn-theme') || 'synthwave';
        applyTheme(savedTheme);

        // Create theme switcher button
        const themeSwitcher = document.createElement('button');
        themeSwitcher.id = 'theme-switcher';
        themeSwitcher.className = 'theme-switcher';
        themeSwitcher.textContent = `Theme: ${themes[savedTheme].name}`;

        // Create dropdown for theme selection
        const themeDropdown = document.createElement('div');
        themeDropdown.className = 'theme-dropdown';
        themeDropdown.style.display = 'none';

        Object.keys(themes).forEach(themeKey => {
            const option = document.createElement('button');
            option.textContent = themes[themeKey].name;
            option.onclick = () => {
                applyTheme(themeKey);
                themeDropdown.style.display = 'none';
            };
            themeDropdown.appendChild(option);
        });

        // Toggle dropdown
        themeSwitcher.onclick = () => {
            themeDropdown.style.display = themeDropdown.style.display === 'none' ? 'block' : 'none';
        };

        // Add to header
        const header = document.querySelector('.header__inner') || document.querySelector('header');
        if (header) {
            const themeContainer = document.createElement('div');
            themeContainer.className = 'theme-container';
            themeContainer.appendChild(themeSwitcher);
            themeContainer.appendChild(themeDropdown);
            header.appendChild(themeContainer);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeSwitcher);
    } else {
        initThemeSwitcher();
    }
})();