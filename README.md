# Sample Portal Application using Piral

Recreation of my portal-sample project using [Piral](https://piral.io) :rocket:.

This React web app is a sample for a portal that hosts other *mini applications* (so called **pilets**). Ideally, these pilets are also build with React, but in practice they could also be build with any technology.

As a proof of concept (POC) the repository contains three pilets:

- One build directly with React
- Another one build in plain JS ("vanilla JS") to demonstrate the generic usage
- Finally, a last one using Angular

## Original Solution

I've recreated this sample based on an original POC. Look for it in the [portal-sample](https://github.com/FlorianRappl/portal-sample) project here on GitHub.

## Building the Code

Before actually building the code we need to resolve all dependencies.

We start by invoking

```bash
./install.sh
```

in the root directory of the repository.

To actually run the portal sample (incl. *all* pilets) we can run:

```bash
./run.sh
```

## License

The MIT License (MIT)

Copyright (c) 2019 Florian Rappl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
