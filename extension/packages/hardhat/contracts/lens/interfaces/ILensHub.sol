// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {ILensProtocol} from '../interfaces/ILensProtocol.sol';
import {ILensGovernable} from '../interfaces/ILensGovernable.sol';
import {ILensHubEventHooks} from '../interfaces/ILensHubEventHooks.sol';
import {ILensImplGetters} from '../interfaces/ILensImplGetters.sol';
import {ILensProfiles} from '../interfaces/ILensProfiles.sol';
import {ILensVersion} from '../interfaces/ILensVersion.sol';

interface ILensHub is
    ILensProfiles,
    ILensProtocol,
    ILensGovernable,
    ILensHubEventHooks,
    ILensImplGetters,
    ILensVersion
{}
