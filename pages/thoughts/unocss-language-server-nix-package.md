---
title: UnoCSS LSP Nix Package
subtitle: Custom derivation
date: 2025-12-09T19:00:00Z
description: Creating a UnoCSS Language Server Package for Nix
---

The UnoCSS language server isn't available in nixpkgs, so I created a custom Nix derivation to package it. Here's the implementation:

```nix
{
  lib,
  stdenv,
  fetchfromgithub,
  nodejs,
  pnpm_9,
  npmhooks,
  versioncheckhook,
  nix-update-script,
}:
let
  pnpm = pnpm_9;
in
stdenv.mkderivation (finalattrs: {
  pname = "unocss-language-server";
  version = "0.1.8";

  src = fetchfromgithub {
    owner = "xna00";
    repo = "unocss-language-server";
    rev = "v${finalattrs.version}";
    hash = "sha256-rri9jvjljvjbby6ush2yzaqcp+z+mqxk7hhdnkpeanw=";
  };

  pnpmdeps = pnpm.fetchdeps {
    inherit (finalattrs) pname version src;
    fetcherversion = 3;
    hash = "sha256-lysalguxshwiekg3sayhrekswer2uawe71v0qo8xjzc=";
  };

  nativebuildinputs = [
    nodejs
    pnpm.confighook
    npmhooks.npminstallhook
  ];

  buildphase = ''
    runhook prebuild
    pnpm run build
    runhook postbuild
  '';

  nativeinstallcheckinputs = [
    versioncheckhook
  ];

  versioncheckprogramarg = "--version";
  doinstallcheck = true;

  passthru.updatescript = nix-update-script { };

  meta = {
    description = "a language server for unocss";
    homepage = "https://github.com/xna00/unocss-language-server";
    changelog = "https://github.com/xna00/unocss-language-server/releases/tag/v${finalattrs.version}";
    license = lib.licenses.mit;
    mainprogram = "unocss-language-server";
  };
})
```
