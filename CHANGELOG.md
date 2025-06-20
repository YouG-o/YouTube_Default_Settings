# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.20] - 2025-06-16

### Changed
- Improved subtitle language preference storage by using a consistent, prefixed key (`yds-subtitlesLanguage`) in localStorage to prevent conflicts and ensure reliability.
- Standardized video player listener system with multi-event detection and automatic optimization for better performance and consistency across extensions.

## [1.2.12] - 2025-06-11

### Added
- Changelog documentation
- Issue templates for GitHub
- Automated release workflow for Chrome and Firefox builds

### Fixed
- Pop tooltip display issues
- Subtitles not applying correctly on direct video loads (e.g. opening a URL directly)

---

*Note: This changelog was introduced in version 1.2.12. For earlier version history, please refer to the [GitHub releases](https://github.com/YouG-o/YouTube_Default_Settings/releases).*

[Unreleased]: https://github.com/YouG-o/YouTube_Default_Settings/compare/v1.2.2...HEAD
[1.2.2]: https://github.com/YouG-o/YouTube_Default_Settings/compare/v1.2.12...v1.2.2
[1.2.12]: https://github.com/YouG-o/YouTube_Default_Settings/compare/v1.2.0...v1.2.12