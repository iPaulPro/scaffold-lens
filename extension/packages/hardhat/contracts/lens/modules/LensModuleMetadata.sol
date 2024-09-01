// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {LensModule} from './LensModule.sol';

abstract contract LensModuleMetadata is LensModule, Ownable {
    string private metadataURI;

    function setModuleMetadataURI(string memory _metadataURI) external onlyOwner {
        metadataURI = _metadataURI;
    }

    function getModuleMetadataURI() external view returns (string memory) {
        return metadataURI;
    }
}
