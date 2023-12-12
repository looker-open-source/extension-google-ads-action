/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2021 Looker Data Sciences, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import styled from 'styled-components'
import { theme, SpaceVertical, Button } from '@looker/components'

export const GoogleBlueTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    key: '#1A73E8',
    keySubtle: '#E8F1FC',
    keyAccent: '#DAE8FB',
    keyFocus: '#75ABF1',
    keyInteractive: '#2D7EEA',
    keyPressed: '#1463CA',
    keyBorder: '#2D7EEA'      
  }
}

export const StyledSidebar = styled(SpaceVertical)`
  border-right: 1px solid #e4e5e6;
  flex-shrink: 0;
`

export const StyledRightSidebar = styled(SpaceVertical)`
  border-left: 1px solid #e4e5e6;
  flex-shrink: 0;
`
