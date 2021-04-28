---
date: 2021-02-25T13:42:50.000+00:00
title: This Is a new Post For My Test Dev
categories:
- other
- new
thumbnail: "/uploads/7.jpg"
description: "<blockquote><p>Hi, why should this be a change</p></blockquote><p>Iilorem
  lorem ipsum. </p><p>Noooo</p><p>Please kill him.</p><p></p>"
columns: []

---
# Internationalization

## Message translations

When necessary, Select2 displays certain messages to the user. For example, a message will appear when no search results were found or more characters need to be entered in order for a search to be made. These messages have been translated into many languages by contributors to Select2, but you can also provide your own translations.

### Language files

Select2 can load message translations for different languages from language files. When using translations provided by Select2, you must make sure to include the translation file in your page after Select2.

When a string is passed in as the language, Select2 will try to resolve it into a language file. This allows you to specify your own language files, which must be defined as an AMD module. If the language file cannot be found, Select2 will assume it is is one of Select2's built-in languages, and it will try to load the translations for that language instead.