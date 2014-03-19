installjs
--------------------------------

A (mostly) Javascript installation library to install web applications.

Motivation
================================
When developing web applications, one of the things I have always fought with
is the installation of the tool. Typically, the web app requires some form of
database, a server-side component that provides REST endpoints, and some type
of client - typically reliant on javascript, HTML5, css, and sometimes a few
other client-side languages (e.g. Java).

Wouldn't it be nice if you could download a package (ideally from source), place
that package, in it's unzipped form on your web server, and perform the rest of
the installation from a remote client?

That's the primary goal of this project.

